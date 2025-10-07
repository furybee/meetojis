#!/usr/bin/env node
/*
 Checks for duplicate emoji definitions in js/data/emoji-data.js
 Usage: node scripts/check-duplicates.js
 Exits with code 1 if duplicates are found.
*/

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'js', 'data', 'emoji-data.js');
const CATEGORIES_DIR = path.join(__dirname, '..', 'js', 'data', 'categories');

function main() {
  const decodeEscapes = (s) =>
    s.replace(/\\u\{([0-9a-fA-F]+)\}/g, (_, h) => String.fromCodePoint(parseInt(h, 16)));
  const occurrences = new Map(); // emoji -> [{ file, line, category }]

  function addFromSource(src, fileLabel, categoryLabel) {
    const lines = src.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let m;
      const re = /emoji:\s*['"]([^'\"]+)['"]/g;
      while ((m = re.exec(line)) !== null) {
        const emoji = decodeEscapes(m[1]);
        const list = occurrences.get(emoji) || [];
        list.push({ file: fileLabel, line: i + 1, category: categoryLabel });
        occurrences.set(emoji, list);
      }
    }
  }

  if (fs.existsSync(CATEGORIES_DIR)) {
    const files = fs.readdirSync(CATEGORIES_DIR).filter((f) => f.endsWith('.js'));
    for (const f of files) {
      const src = fs.readFileSync(path.join(CATEGORIES_DIR, f), 'utf8');
      const cat = f.replace(/\.js$/, '');
      addFromSource(src, `categories/${f}`, cat);
    }
  } else {
    const src = fs.readFileSync(FILE, 'utf8');
    addFromSource(src, 'emoji-data.js', 'unknown');
  }

  const duplicates = [...occurrences.entries()].filter(([, locs]) => locs.length > 1);
  const total = [...occurrences.keys()].length;
  if (duplicates.length === 0) {
    console.log(`OK: ${total} emojis, no duplicates found.`);
    process.exit(0);
  } else {
    console.log(`Found ${duplicates.length} duplicate emoji (of ${total} total):`);
    for (const [emoji, locs] of duplicates) {
      const where = locs.map((l) => `${l.category || 'unknown'}@${l.file}:L${l.line}`).join(', ');
      console.log(`- ${emoji} -> ${locs.length} occurrences: ${where}`);
    }
    process.exit(1);
  }
}

main();

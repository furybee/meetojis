#!/usr/bin/env node
/*
 Checks for duplicate emoji definitions in js/data/emoji-data.js
 Usage: node scripts/check-duplicates.js
 Exits with code 1 if duplicates are found.
*/

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'js', 'data', 'emoji-data.js');

function main() {
  const src = fs.readFileSync(FILE, 'utf8');
  const lines = src.split(/\r?\n/);

  // Track when we are inside static CATEGORIES to infer category labels.
  let inCategories = false;
  let braceDepth = 0;
  let currentCategory = null;

  const occurrences = new Map(); // emoji -> [{ line, category }]

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inCategories && /static\s+CATEGORIES\s*=\s*{/.test(line)) {
      inCategories = true;
      // Initialize depth at count of { minus }
      braceDepth = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
      continue;
    }

    if (inCategories) {
      // Update depth first (so we can detect when we leave the object)
      braceDepth += (line.match(/{/g) || []).length;
      braceDepth -= (line.match(/}/g) || []).length;

      // Detect category keys when at depth 2 immediately after entering CATEGORIES (depth 1 is the CATEGORIES object itself)
      // Pragmatically: when depth === 2 and the line looks like 'category': {
      const catMatch = braceDepth >= 1 && line.match(/^\s*['"]([^'\"]+)['"]\s*:\s*{\s*$/);
      if (catMatch && braceDepth === 2) {
        currentCategory = catMatch[1];
      }

      // Extract emoji literals on this line
      const regex = /emoji:\s*['"]([^'\"]+)['"]/g;
      let m;
      while ((m = regex.exec(line)) !== null) {
        const emoji = m[1];
        const list = occurrences.get(emoji) || [];
        list.push({ line: i + 1, category: currentCategory });
        occurrences.set(emoji, list);
      }

      if (braceDepth <= 0) {
        inCategories = false;
        currentCategory = null;
      }
    }
  }

  const duplicates = [...occurrences.entries()].filter(([, locs]) => locs.length > 1);

  const total = [...occurrences.keys()].length;
  if (duplicates.length === 0) {
    console.log(`OK: ${total} emojis, no duplicates found.`);
    process.exit(0);
  } else {
    console.log(`Found ${duplicates.length} duplicate emoji (of ${total} total):`);
    for (const [emoji, locs] of duplicates) {
      const where = locs
        .map(l => `${l.category || 'unknown'}@L${l.line}`)
        .join(', ');
      console.log(`- ${emoji} -> ${locs.length} occurrences: ${where}`);
    }
    process.exit(1);
  }
}

main();

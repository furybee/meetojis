/**
 * Emoji data and categories
 */
class EmojiData {
  static CATEGORY_ICONS = {
    'smileys': '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"/></svg>',
    'gestures': '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M512-40q-82 0-154-37.5T240-182L48-464l19-19q20-21 49.5-24t53.5 14l110 76v-383q0-17 11.5-28.5T320-840q17 0 28.5 11.5T360-800v537L212-366l95 138q35 51 89 79.5T512-120q103 0 175.5-72.5T760-368v-392q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v392q0 137-95.5 232.5T512-40Zm-72-440v-400q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v400h-80Zm160 0v-360q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v360h-80ZM486-300Z"/></svg>',
    'hearts': '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>',
    'objects': '<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m80-80 200-560 360 360L80-80Zm132-132 282-100-182-182-100 282Zm370-246-42-42 224-224q32-32 77-32t77 32l24 24-42 42-24-24q-14-14-35-14t-35 14L582-458ZM422-618l-42-42 24-24q14-14 14-34t-14-34l-26-26 42-42 26 26q32 32 32 76t-32 76l-24 24Zm80 80-42-42 144-144q14-14 14-35t-14-35l-64-64 42-42 64 64q32 32 32 77t-32 77L502-538Zm160 160-42-42 64-64q32-32 77-32t77 32l64 64-42 42-64-64q-14-14-35-14t-35 14l-64 64ZM212-212Z"/></svg>'
  };

  static UI_ICONS = {
    search: '<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="current"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>',
    close: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="current"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>'
  };

  static CATEGORIES = {
    'smileys': {
      name: 'Smileys & People',
      emojis: [
        { emoji: '😀', keywords: ['smile', 'happy', 'joy', 'grin', 'content'] },
        { emoji: '😃', keywords: ['smile', 'happy', 'joy', 'grin', 'excited'] },
        { emoji: '😄', keywords: ['smile', 'happy', 'joy', 'laugh', 'excited'] },
        { emoji: '😁', keywords: ['smile', 'happy', 'grin', 'joy', 'teeth'] },
        { emoji: '😆', keywords: ['laugh', 'happy', 'joy', 'excited', 'fun'] },
        { emoji: '😅', keywords: ['laugh', 'sweat', 'nervous', 'awkward', 'relief'] },
        { emoji: '😂', keywords: ['laugh', 'joy', 'tears', 'funny', 'hilarious'] },
        { emoji: '🤣', keywords: ['laugh', 'rolling', 'funny', 'hilarious', 'tears'] },
        { emoji: '😊', keywords: ['smile', 'happy', 'blush', 'shy', 'content'] },
        { emoji: '😇', keywords: ['angel', 'innocent', 'halo', 'good', 'pure'] },
        { emoji: '🙂', keywords: ['smile', 'happy', 'slight', 'content', 'ok'] },
        { emoji: '🙃', keywords: ['upside', 'down', 'silly', 'sarcastic', 'ironic'] },
        { emoji: '😉', keywords: ['wink', 'flirt', 'joke', 'secret', 'playful'] },
        { emoji: '😌', keywords: ['relieved', 'peaceful', 'content', 'calm', 'zen'] },
        { emoji: '😍', keywords: ['love', 'heart', 'eyes', 'adore', 'crush'] },
        { emoji: '🥰', keywords: ['love', 'hearts', 'smiling', 'adore', 'affection'] },
        { emoji: '😘', keywords: ['kiss', 'love', 'heart', 'blow', 'affection'] },
        { emoji: '😗', keywords: ['kiss', 'whistle', 'lips', 'pucker', 'cute'] },
        { emoji: '😙', keywords: ['kiss', 'smile', 'happy', 'content', 'affection'] },
        { emoji: '😚', keywords: ['kiss', 'closed', 'eyes', 'love', 'peaceful'] },
        { emoji: '😋', keywords: ['yum', 'tongue', 'delicious', 'tasty', 'food'] },
        { emoji: '😛', keywords: ['tongue', 'playful', 'silly', 'tease', 'fun'] },
        { emoji: '😝', keywords: ['tongue', 'wink', 'silly', 'playful', 'tease'] },
        { emoji: '😜', keywords: ['tongue', 'wink', 'crazy', 'silly', 'playful'] },
        { emoji: '🤪', keywords: ['crazy', 'wild', 'silly', 'fun', 'party'] },
        { emoji: '🤨', keywords: ['raised', 'eyebrow', 'suspicious', 'doubt', 'questioning'] },
        { emoji: '🧐', keywords: ['monocle', 'fancy', 'study', 'examine', 'curious'] },
        { emoji: '🤓', keywords: ['nerd', 'glasses', 'geek', 'smart', 'study'] },
        { emoji: '😎', keywords: ['cool', 'sunglasses', 'awesome', 'confident', 'chill'] },
        { emoji: '🤩', keywords: ['star', 'struck', 'amazed', 'wow', 'excited'] },
        { emoji: '🥳', keywords: ['party', 'celebrate', 'birthday', 'hat', 'fun'] },
        { emoji: '😟', keywords: ['worried', 'sad', 'concerned', 'anxious', 'upset'] },
        { emoji: '😔', keywords: ['sad', 'down', 'disappointed', 'dejected', 'pensive'] },
        { emoji: '😞', keywords: ['disappointed', 'sad', 'upset', 'let', 'down'] },
        { emoji: '😣', keywords: ['persevere', 'struggle', 'pain', 'effort', 'hard'] },
        { emoji: '😖', keywords: ['confounded', 'confused', 'frustrated', 'annoyed'] },
        { emoji: '😫', keywords: ['tired', 'exhausted', 'weary', 'fed', 'up'] },
        { emoji: '😩', keywords: ['weary', 'tired', 'exhausted', 'frustrated', 'annoyed'] },
        { emoji: '🥺', keywords: ['pleading', 'puppy', 'eyes', 'beg', 'please', 'cute'] },
        { emoji: '😢', keywords: ['cry', 'sad', 'tears', 'weep', 'sorrow'] },
        { emoji: '😭', keywords: ['loudly', 'crying', 'sob', 'tears', 'bawl'] },
        { emoji: '😤', keywords: ['huffing', 'mad', 'angry', 'frustrated', 'steaming'] },
        { emoji: '😠', keywords: ['angry', 'mad', 'annoyed', 'frustrated', 'grumpy'] },
        { emoji: '😡', keywords: ['pouting', 'angry', 'mad', 'rage', 'furious'] },
        { emoji: '🤬', keywords: ['swearing', 'cursing', 'angry', 'symbols', 'mad'] },
        { emoji: '🤯', keywords: ['exploding', 'head', 'mind', 'blown', 'shocked'] },
        { emoji: '😳', keywords: ['flushed', 'embarrassed', 'shy', 'blush', 'surprise'] },
        { emoji: '🥵', keywords: ['hot', 'heat', 'sweat', 'burn', 'fever'] },
        { emoji: '🥶', keywords: ['cold', 'freeze', 'chill', 'blue', 'frozen'] },
        { emoji: '😱', keywords: ['scream', 'fear', 'shock', 'surprise', 'horror'] },
        { emoji: '😨', keywords: ['fearful', 'scared', 'afraid', 'shock', 'surprise'] },
        { emoji: '😰', keywords: ['anxious', 'sweat', 'nervous', 'worried', 'stress'] },
        { emoji: '😥', keywords: ['sad', 'but', 'relieved', 'disappointed', 'whew'] },
        { emoji: '😓', keywords: ['downcast', 'sweat', 'sad', 'tired', 'sorry'] },
        { emoji: '🤗', keywords: ['hugging', 'hug', 'embrace', 'cuddle', 'love'] },
        { emoji: '🤔', keywords: ['thinking', 'hmm', 'consider', 'pondering', 'wonder'] },
        { emoji: '🤭', keywords: ['hand', 'over', 'mouth', 'giggle', 'oops', 'secret'] },
        { emoji: '🤫', keywords: ['shh', 'quiet', 'silence', 'secret', 'hush'] },
        { emoji: '🤥', keywords: ['lying', 'liar', 'pinocchio', 'dishonest', 'fib'] },
        { emoji: '😶', keywords: ['no', 'mouth', 'mute', 'silence', 'quiet'] },
        { emoji: '😐', keywords: ['neutral', 'expressionless', 'meh', 'blank', 'deadpan'] },
        { emoji: '😑', keywords: ['expressionless', 'blank', 'meh', 'deadpan', 'whatever'] },
        { emoji: '😬', keywords: ['grimacing', 'awkward', 'eek', 'yikes', 'cringe'] },
        { emoji: '🙄', keywords: ['eye', 'roll', 'whatever', 'annoyed', 'duh'] },
        { emoji: '😯', keywords: ['hushed', 'surprised', 'wow', 'amazed', 'gasp'] },
        { emoji: '😦', keywords: ['frowning', 'open', 'mouth', 'surprised', 'concern'] },
        { emoji: '😧', keywords: ['anguished', 'stunned', 'surprised', 'worried'] },
        { emoji: '😮', keywords: ['open', 'mouth', 'surprised', 'wow', 'amazed'] },
        { emoji: '😲', keywords: ['astonished', 'amazed', 'surprised', 'wow', 'gasp'] },
        { emoji: '🥱', keywords: ['yawn', 'tired', 'sleepy', 'bored'] },
        { emoji: '😴', keywords: ['sleeping', 'sleep', 'tired', 'zzz', 'rest'] },
        { emoji: '🤤', keywords: ['drooling', 'sleep', 'hungry', 'desire', 'want'] },
        { emoji: '😪', keywords: ['sleepy', 'tired', 'yawn', 'drowsy', 'exhausted'] },
        { emoji: '😵', keywords: ['dizzy', 'confused', 'knocked', 'out', 'dead'] },
        { emoji: '🤐', keywords: ['zipper', 'mouth', 'secret', 'sealed', 'quiet'] },
        { emoji: '🥴', keywords: ['woozy', 'tipsy', 'drunk', 'confused', 'dizzy'] },
        { emoji: '🤢', keywords: ['nauseated', 'sick', 'ill', 'green', 'vomit'] },
        { emoji: '🤮', keywords: ['vomiting', 'sick', 'throw', 'up', 'puke'] },
        { emoji: '🤧', keywords: ['sneezing', 'gesundheit', 'sick', 'allergies'] },
        { emoji: '😷', keywords: ['mask', 'sick', 'ill', 'doctor', 'health'] },
        { emoji: '🤒', keywords: ['thermometer', 'sick', 'fever', 'ill', 'temperature'] },
        { emoji: '🤕', keywords: ['bandaged', 'head', 'hurt', 'injury', 'hospital'] }
      ]
    },
    'gestures': {
      name: 'Gestures',
      emojis: [
        { emoji: '👍', keywords: ['thumbs', 'up', 'good', 'yes', 'ok', 'approve'] },
        { emoji: '👎', keywords: ['thumbs', 'down', 'bad', 'no', 'disapprove', 'dislike'] },
        { emoji: '👌', keywords: ['ok', 'perfect', 'good', 'fine', 'excellent'] },
        { emoji: '🤌', keywords: ['pinched', 'fingers', 'italian', 'chef', 'kiss'] },
        { emoji: '🤏', keywords: ['pinch', 'small', 'tiny', 'little', 'bit'] },
        { emoji: '✌️', keywords: ['peace', 'victory', 'two', 'fingers', 'sign'] },
        { emoji: '🤞', keywords: ['cross', 'fingers', 'luck', 'hope', 'wish'] },
        { emoji: '🤟', keywords: ['love', 'you', 'sign', 'language', 'hand'] },
        { emoji: '🤘', keywords: ['rock', 'on', 'metal', 'horns', 'music'] },
        { emoji: '🤙', keywords: ['call', 'me', 'hang', 'loose', 'shaka'] },
        { emoji: '👈', keywords: ['point', 'left', 'finger', 'direction', 'that'] },
        { emoji: '👉', keywords: ['point', 'right', 'finger', 'direction', 'this'] },
        { emoji: '👆', keywords: ['point', 'up', 'finger', 'direction', 'above'] },
        { emoji: '👇', keywords: ['point', 'down', 'finger', 'direction', 'below'] },
        { emoji: '☝️', keywords: ['index', 'point', 'up', 'finger', 'one'] },
        { emoji: '👋', keywords: ['wave', 'hello', 'goodbye', 'hi', 'bye'] },
        { emoji: '🤚', keywords: ['raised', 'back', 'hand', 'stop', 'high', 'five'] },
        { emoji: '🖐', keywords: ['hand', 'five', 'fingers', 'palm', 'stop'] },
        { emoji: '✋', keywords: ['raised', 'hand', 'stop', 'high', 'five'] },
        { emoji: '🖖', keywords: ['vulcan', 'spock', 'star', 'trek', 'live', 'long'] },
        { emoji: '👏', keywords: ['clap', 'applause', 'bravo', 'good', 'job'] },
        { emoji: '🙌', keywords: ['praise', 'celebration', 'hands', 'hooray', 'yay'] },
        { emoji: '🤝', keywords: ['handshake', 'deal', 'agreement', 'partnership', 'hello'] },
        { emoji: '👐', keywords: ['open', 'hands', 'hug', 'embrace', 'jazz'] },
        { emoji: '🤲', keywords: ['palms', 'up', 'together', 'pray', 'ask'] },
        { emoji: '🤜', keywords: ['right', 'facing', 'fist', 'punch', 'bump'] },
        { emoji: '🤛', keywords: ['left', 'facing', 'fist', 'punch', 'bump'] },
        { emoji: '✊', keywords: ['raised', 'fist', 'power', 'strength', 'solidarity'] },
        { emoji: '👊', keywords: ['fist', 'bump', 'punch', 'knuckles', 'greeting'] },
        { emoji: '🙏', keywords: ['folded', 'hands', 'pray', 'please', 'thank', 'you'] },
        { emoji: '💪', keywords: ['flexed', 'bicep', 'strong', 'muscle', 'power'] },
        { emoji: '🦵', keywords: ['leg', 'kick', 'limb'] },
        { emoji: '🦶', keywords: ['foot', 'kick', 'stomp'] },
        { emoji: '👂', keywords: ['ear', 'hear', 'listen', 'sound'] },
        { emoji: '👃', keywords: ['nose', 'smell', 'sniff'] },
        { emoji: '👀', keywords: ['eyes', 'look', 'see', 'watch'] },
        { emoji: '👁️', keywords: ['eye', 'see', 'look', 'watch'] },
        { emoji: '👄', keywords: ['mouth', 'lips', 'kiss', 'speak'] },
        { emoji: '👅', keywords: ['tongue', 'lick', 'taste'] }
      ]
    },
    'hearts': {
      name: 'Hearts',
      emojis: [
        { emoji: '❤️', keywords: ['love', 'heart', 'red', 'romance', 'affection'] },
        { emoji: '🧡', keywords: ['orange', 'heart', 'love', 'warm', 'friendship'] },
        { emoji: '💛', keywords: ['yellow', 'heart', 'love', 'friendship', 'happy'] },
        { emoji: '💚', keywords: ['green', 'heart', 'love', 'nature', 'jealous'] },
        { emoji: '💙', keywords: ['blue', 'heart', 'love', 'trust', 'loyalty'] },
        { emoji: '💜', keywords: ['purple', 'heart', 'love', 'compassion', 'understanding'] },
        { emoji: '🖤', keywords: ['black', 'heart', 'love', 'dark', 'evil'] },
        { emoji: '🤍', keywords: ['white', 'heart', 'love', 'pure', 'clean'] },
        { emoji: '🤎', keywords: ['brown', 'heart', 'love', 'earth', 'stability'] },
        { emoji: '💔', keywords: ['broken', 'heart', 'love', 'sad', 'heartbreak'] },
        { emoji: '❣️', keywords: ['heart', 'exclamation', 'love', 'affection', 'decoration'] },
        { emoji: '💕', keywords: ['two', 'hearts', 'love', 'affection', 'romance'] },
        { emoji: '💞', keywords: ['revolving', 'hearts', 'love', 'affection', 'romance'] },
        { emoji: '💓', keywords: ['beating', 'heart', 'love', 'affection', 'alive'] },
        { emoji: '💗', keywords: ['growing', 'heart', 'love', 'affection', 'excited'] },
        { emoji: '💖', keywords: ['sparkling', 'heart', 'love', 'affection', 'excited'] },
        { emoji: '💘', keywords: ['heart', 'arrow', 'love', 'cupid', 'romance'] },
        { emoji: '💝', keywords: ['heart', 'box', 'love', 'gift', 'present'] },
        { emoji: '💟', keywords: ['heart', 'decoration', 'love', 'purple', 'white'] }
      ]
    },
    'objects': {
      name: 'Objects & Symbols',
      emojis: [
        { emoji: '🎉', keywords: ['party', 'celebration', 'confetti', 'tada', 'congrats'] },
        { emoji: '🎊', keywords: ['confetti', 'ball', 'party', 'celebration', 'festive'] },
        { emoji: '✨', keywords: ['sparkles', 'stars', 'magic', 'shine', 'glitter'] },
        { emoji: '🔥', keywords: ['fire', 'hot', 'burn', 'lit', 'flame'] },
        { emoji: '💯', keywords: ['hundred', 'percent', 'perfect', 'score', 'complete'] },
        { emoji: '⭐', keywords: ['star', 'favorite', 'rate', 'excellent', 'good'] },
        { emoji: '🌟', keywords: ['glowing', 'star', 'shine', 'sparkle', 'bright'] },
        { emoji: '⚡', keywords: ['lightning', 'bolt', 'thunder', 'electric', 'power'] },
        { emoji: '💥', keywords: ['boom', 'explosion', 'burst', 'comic', 'crash'] },
        { emoji: '💫', keywords: ['dizzy', 'star', 'sparkle', 'magic', 'cosmic'] },
        { emoji: '☮️', keywords: ['peace', 'symbol', 'hippie', 'love', 'harmony'] },
        { emoji: '✅', keywords: ['check', 'mark', 'done', 'complete', 'yes'] },
        { emoji: '❌', keywords: ['cross', 'mark', 'wrong', 'no', 'error'] },
        { emoji: '❓', keywords: ['question', 'mark', 'confused', 'help', 'what'] },
        { emoji: '❗', keywords: ['exclamation', 'mark', 'important', 'alert', 'warning'] },
        { emoji: '💡', keywords: ['bulb', 'idea', 'light', 'bright', 'innovation'] },
        { emoji: '🔔', keywords: ['bell', 'notification', 'alert', 'ring'] },
        { emoji: '🔕', keywords: ['bell', 'slash', 'silent', 'mute', 'quiet'] },
        { emoji: '🎯', keywords: ['target', 'goal', 'aim', 'bullseye', 'focus'] },
        { emoji: '💎', keywords: ['diamond', 'gem', 'jewel', 'precious', 'sparkle'] },
        { emoji: '🎁', keywords: ['gift', 'present', 'box', 'surprise', 'birthday'] },
        { emoji: '🏆', keywords: ['trophy', 'award', 'winner', 'champion', 'first'] },
        { emoji: '🥇', keywords: ['gold', 'medal', 'first', 'place', 'winner'] },
        { emoji: '🥈', keywords: ['silver', 'medal', 'second', 'place', 'runner'] },
        { emoji: '🥉', keywords: ['bronze', 'medal', 'third', 'place'] },
        { emoji: '🎖️', keywords: ['medal', 'military', 'honor', 'award', 'decoration'] },
        { emoji: '🏅', keywords: ['medal', 'sports', 'achievement', 'award'] },
        { emoji: '🎪', keywords: ['circus', 'tent', 'fun', 'entertainment', 'show'] },
        { emoji: '🎭', keywords: ['performing', 'arts', 'theater', 'masks', 'drama'] },
        { emoji: '🎨', keywords: ['artist', 'palette', 'paint', 'creative', 'art'] },
        { emoji: '🎸', keywords: ['guitar', 'music', 'rock', 'instrument', 'song'] },
        { emoji: '🎵', keywords: ['musical', 'note', 'music', 'song', 'melody'] },
        { emoji: '🎶', keywords: ['musical', 'notes', 'music', 'song', 'melody'] },
        { emoji: '🎤', keywords: ['microphone', 'sing', 'karaoke', 'music', 'voice'] },
        { emoji: '🎧', keywords: ['headphones', 'music', 'listen', 'audio', 'sound'] },
        { emoji: '📱', keywords: ['mobile', 'phone', 'cell', 'smartphone', 'device'] },
        { emoji: '💻', keywords: ['laptop', 'computer', 'pc', 'work', 'tech'] },
        { emoji: '🖥️', keywords: ['desktop', 'computer', 'monitor', 'pc', 'work'] },
        { emoji: '⌨️', keywords: ['keyboard', 'type', 'computer', 'input'] },
        { emoji: '🖱️', keywords: ['mouse', 'computer', 'click', 'pointer'] },
        { emoji: '📺', keywords: ['television', 'tv', 'watch', 'screen', 'entertainment'] },
        { emoji: '📷', keywords: ['camera', 'photo', 'picture', 'snapshot'] },
        { emoji: '📹', keywords: ['video', 'camera', 'record', 'film'] },
        { emoji: '🔍', keywords: ['magnifying', 'glass', 'search', 'find', 'look'] },
        { emoji: '🔎', keywords: ['magnifying', 'glass', 'tilted', 'search', 'examine'] },
        { emoji: '💰', keywords: ['money', 'bag', 'cash', 'rich', 'wealth'] },
        { emoji: '💳', keywords: ['credit', 'card', 'payment', 'money', 'purchase'] },
        { emoji: '🎲', keywords: ['dice', 'game', 'gambling', 'chance', 'random'] },
        { emoji: '🧩', keywords: ['puzzle', 'piece', 'solve', 'problem', 'solution'] }
      ]
    }
  };

  /**
   * Get all emojis flattened from all categories
   */
  static getAllEmojis() {
    return Object.values(this.CATEGORIES)
      .flatMap(category => category.emojis);
  }

  /**
   * Get emojis by category
   */
  static getCategory(categoryKey) {
    return this.CATEGORIES[categoryKey] || null;
  }

  /**
   * Get all category keys
   */
  static getCategoryKeys() {
    return Object.keys(this.CATEGORIES);
  }
}

window.EmojiData = EmojiData;
/**
 * Service for emoji operations
 * Single Responsibility: Handle emoji logic and search
 */
class EmojiService {
  constructor(emojiData = window.EmojiData) {
    this.emojiData = emojiData;
    this.allEmojis = this.emojiData.getAllEmojis();
  }

  /**
   * Get emojis for a specific category
   */
  getEmojisByCategory(categoryKey) {
    const category = this.emojiData.getCategory(categoryKey);
    return category ? category.emojis : [];
  }

  /**
   * Search emojis by keyword
   */
  searchEmojis(searchTerm) {
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }

    const term = searchTerm.toLowerCase().trim();
    return this.allEmojis.filter((emojiObj) =>
      emojiObj.keywords.some((keyword) => keyword.includes(term))
    );
  }

  /**
   * Get all category keys
   */
  getCategoryKeys() {
    return this.emojiData.getCategoryKeys();
  }

  /**
   * Get category icon SVG
   */
  getCategoryIcon(categoryKey) {
    return this.emojiData.CATEGORY_ICONS[categoryKey] || '';
  }

  /**
   * Get UI icon SVG
   */
  getUIIcon(iconKey) {
    return this.emojiData.UI_ICONS[iconKey] || '';
  }
}

window.EmojiService = EmojiService;

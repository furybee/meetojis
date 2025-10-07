/**
 * Main Meetojis Controller
 * Single Responsibility: Coordinate all components and services
 * Open/Closed Principle: Open for extension, closed for modification
 * Dependency Inversion: Depends on abstractions (services), not concrete implementations
 */
class MeetojisController {
  constructor() {
    // Dependency injection - easy to test and extend
    this.domService = new window.DomService();
    this.emojiService = new window.EmojiService();
    this.emojiButton = new window.EmojiButton(this.domService, () => this.togglePicker());
    this.emojiPicker = new window.EmojiPicker(this.domService, this.emojiService);

    // Setup emoji selection handler
    this.emojiPicker.setOnEmojiSelect((emoji) => this.handleEmojiSelect(emoji));

    // DOM observer for dynamic content
    this.observer = null;
  }

  /**
   * Initialize the extension
   */
  init() {
    this.createButton();
    this.setupObserver();
  }

  /**
   * Create the emoji button
   */
  createButton() {
    if (!this.emojiButton.exists()) {
      this.emojiButton.create();
    }
  }

  /**
   * Toggle emoji picker visibility
   */
  togglePicker() {
    if (this.emojiPicker.isVisible()) {
      this.emojiPicker.hide();
    } else {
      this.emojiPicker.show();
    }
  }

  /**
   * Handle emoji selection
   */
  handleEmojiSelect(emoji) {
    const textarea = this.domService.findMeetTextarea();
    if (textarea) {
      this.domService.insertTextAtCursor(textarea, emoji);
    }
  }

  /**
   * Setup mutation observer for dynamic content
   */
  setupObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new MutationObserver(() => {
      this.createButton();
    });

    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Cleanup resources
   */
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    this.emojiButton.remove();
    this.emojiPicker.hide();
  }
}

window.MeetojisController = MeetojisController;
/**
 * Meetojis Button Component
 * Single Responsibility: Manage the main emoji button that triggers the picker
 */
class EmojiButton {
  constructor(domService, onClickCallback) {
    this.domService = domService;
    this.onClickCallback = onClickCallback;
    this.buttonElement = null;
  }

  /**
   * Create and inject the emoji button
   */
  create() {
    if (document.getElementById('meetojis-button')) {
      return;
    }

    const textarea = this.domService.findMeetTextarea();
    if (!textarea) return;

    const sendButton = this.domService.findSendButton(textarea);
    if (!sendButton) return;

    const buttonContainer = sendButton.parentElement;
    if (!buttonContainer) return;

    this.buttonElement = this.domService.createElement('button', {
      id: 'meetojis-button',
      className: 'meetojis-btn'
    });

    // Create icon image
    const img = this.domService.createElement('img', {
      src: chrome.runtime.getURL('icons/icon48.png'),
      width: '24',
      height: '24'
    });
    img.style.borderRadius = '50%';
    this.buttonElement.appendChild(img);

    // Add click handler
    this.buttonElement.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.onClickCallback) {
        this.onClickCallback();
      }
    });

    buttonContainer.insertBefore(this.buttonElement, sendButton);
  }

  /**
   * Remove the button from DOM
   */
  remove() {
    if (this.buttonElement && this.buttonElement.parentElement) {
      this.buttonElement.remove();
      this.buttonElement = null;
    }
  }

  /**
   * Check if button exists
   */
  exists() {
    return !!document.getElementById('meetojis-button');
  }
}

window.EmojiButton = EmojiButton;
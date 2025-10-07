/**
 * Service for DOM manipulation and element finding
 * Single Responsibility: Handle DOM operations
 */
class DomService {
  /**
   * Find textarea in Google Meet sidebar
   */
  findMeetTextarea() {
    return document.querySelector('aside textarea');
  }

  /**
   * Find send button in Google Meet
   */
  findSendButton(startElement) {
    let parentContainer = startElement.parentElement;
    let sendButton = null;

    // Traverse up to find container with button
    while (parentContainer && !sendButton) {
      sendButton = parentContainer.querySelector('button');
      if (!sendButton) {
        parentContainer = parentContainer.parentElement;
      }
    }

    // Fallback: search in aside
    if (!sendButton) {
      const allButtons = document.querySelectorAll('aside button');
      for (let btn of allButtons) {
        const icon = btn.querySelector('i');
        if (icon && icon.textContent && icon.textContent.includes('send')) {
          sendButton = btn;
          break;
        }
      }
    }

    return sendButton;
  }

  /**
   * Create DOM element with attributes
   */
  createElement(tag, attributes = {}) {
    const element = document.createElement(tag);

    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'innerHTML') {
        element.innerHTML = value;
      } else if (key === 'textContent') {
        element.textContent = value;
      } else if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        Object.entries(value).forEach(([dataKey, dataValue]) => {
          element.dataset[dataKey] = dataValue;
        });
      } else {
        element.setAttribute(key, value);
      }
    });

    return element;
  }

  /**
   * Insert emoji into textarea at cursor position
   */
  insertTextAtCursor(textarea, text) {
    const currentValue = textarea.value;
    const cursorPosition = textarea.selectionStart || currentValue.length;

    textarea.value =
      currentValue.slice(0, cursorPosition) + text + currentValue.slice(cursorPosition);

    // Trigger events
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
    textarea.dispatchEvent(new Event('change', { bubbles: true }));

    // Update cursor position
    const newCursorPosition = cursorPosition + text.length;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    textarea.focus();
  }

  /**
   * Add click outside listener
   */
  addClickOutsideListener(element, callback, delay = 100) {
    const handleClickOutside = (e) => {
      if (!element.contains(e.target)) {
        callback();
        document.removeEventListener('click', handleClickOutside);
      }
    };

    setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, delay);

    return () => document.removeEventListener('click', handleClickOutside);
  }
}

window.DomService = DomService;

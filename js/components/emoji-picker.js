/**
 * Emoji Picker Component
 * Single Responsibility: Manage the emoji picker UI and interactions
 */
class EmojiPicker {
  constructor(domService, emojiService) {
    this.domService = domService;
    this.emojiService = emojiService;
    this.pickerElement = null;
    this.currentCategory = 'smileys';
    this.onEmojiSelect = null;
    this.cleanupClickOutside = null;
  }

  /**
   * Show the emoji picker
   */
  show() {
    if (this.isVisible()) {
      this.hide();
      return;
    }

    this.pickerElement = this.createPickerElement();
    document.body.appendChild(this.pickerElement);

    // Render initial emojis AFTER the element is in the DOM
    this.renderEmojis(this.emojiService.getEmojisByCategory(this.currentCategory));

    // Setup click outside handler
    this.cleanupClickOutside = this.domService.addClickOutsideListener(
      this.pickerElement,
      () => this.hide()
    );

    // Focus search input
    const searchInput = this.pickerElement.querySelector('.meetojis-search');
    if (searchInput) {
      searchInput.focus();
    }
  }

  /**
   * Hide the emoji picker
   */
  hide() {
    if (this.pickerElement) {
      this.pickerElement.remove();
      this.pickerElement = null;
    }

    if (this.cleanupClickOutside) {
      this.cleanupClickOutside();
      this.cleanupClickOutside = null;
    }
  }

  /**
   * Check if picker is visible
   */
  isVisible() {
    return !!document.getElementById('meetojis-picker');
  }

  /**
   * Set callback for emoji selection
   */
  setOnEmojiSelect(callback) {
    this.onEmojiSelect = callback;
  }

  /**
   * Create the complete picker element
   */
  createPickerElement() {
    const picker = this.domService.createElement('div', {
      id: 'meetojis-picker',
      className: 'meetojis-picker'
    });

    // Add components
    picker.appendChild(this.createHeader());
    picker.appendChild(this.createScrollContainer());
    picker.appendChild(this.createCategoryTabs());

    return picker;
  }

  /**
   * Create header with search and close button
   */
  createHeader() {
    const header = this.domService.createElement('div', {
      className: 'meetojis-header'
    });

    // Search container
    const searchContainer = this.domService.createElement('div', {
      className: 'meetojis-search-container'
    });

    // Search icon
    const searchIcon = this.domService.createElement('span', {
      className: 'meetojis-search-icon',
      innerHTML: this.emojiService.getUIIcon('search')
    });

    // Search input
    const searchInput = this.domService.createElement('input', {
      type: 'text',
      className: 'meetojis-search'
    });

    searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

    searchContainer.appendChild(searchIcon);
    searchContainer.appendChild(searchInput);

    // Close button
    const closeButton = this.domService.createElement('button', {
      className: 'meetojis-close',
      innerHTML: this.emojiService.getUIIcon('close')
    });

    closeButton.addEventListener('click', () => this.hide());

    header.appendChild(searchContainer);
    header.appendChild(closeButton);

    return header;
  }

  /**
   * Create scroll container with emoji grid
   */
  createScrollContainer() {
    const scrollContainer = this.domService.createElement('div', {
      className: 'meetojis-scroll-container'
    });

    const emojiContainer = this.domService.createElement('div', {
      className: 'meetojis-emoji-container'
    });

    scrollContainer.appendChild(emojiContainer);

    // Render initial category
    this.renderEmojis(this.emojiService.getEmojisByCategory(this.currentCategory));

    return scrollContainer;
  }

  /**
   * Create category tabs
   */
  createCategoryTabs() {
    const categoriesContainer = this.domService.createElement('div', {
      className: 'meetojis-categories'
    });

    this.emojiService.getCategoryKeys().forEach(categoryKey => {
      const categoryBtn = this.domService.createElement('button', {
        className: 'meetojis-category-btn',
        innerHTML: this.emojiService.getCategoryIcon(categoryKey),
        dataset: { category: categoryKey }
      });

      if (categoryKey === this.currentCategory) {
        categoryBtn.classList.add('active');
      }

      categoryBtn.addEventListener('click', () => this.handleCategoryChange(categoryKey));
      categoriesContainer.appendChild(categoryBtn);
    });

    return categoriesContainer;
  }

  /**
   * Handle category change
   */
  handleCategoryChange(categoryKey) {
    this.currentCategory = categoryKey;
    this.updateCategoryTabs();
    this.renderEmojis(this.emojiService.getEmojisByCategory(categoryKey));

    // Clear search
    const searchInput = this.pickerElement.querySelector('.meetojis-search');
    if (searchInput) {
      searchInput.value = '';
    }
  }

  /**
   * Handle search input
   */
  handleSearch(searchTerm) {
    if (searchTerm === '') {
      this.renderEmojis(this.emojiService.getEmojisByCategory(this.currentCategory));
    } else {
      const filteredEmojis = this.emojiService.searchEmojis(searchTerm);
      this.renderEmojis(filteredEmojis);
    }
  }

  /**
   * Update category tabs active state
   */
  updateCategoryTabs() {
    if (!this.pickerElement) return;

    const tabs = this.pickerElement.querySelectorAll('.meetojis-category-btn');
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.category === this.currentCategory);
    });
  }

  /**
   * Render emojis in the grid
   */
  renderEmojis(emojis) {
    if (!this.pickerElement) return;

    const emojiContainer = this.pickerElement.querySelector('.meetojis-emoji-container');
    if (!emojiContainer) return;

    emojiContainer.innerHTML = '';

    emojis.forEach(emojiObj => {
      const emojiBtn = this.domService.createElement('button', {
        className: 'meetojis-emoji-btn',
        textContent: emojiObj.emoji,
        title: emojiObj.keywords.join(', ')
      });

      emojiBtn.addEventListener('click', () => {
        if (this.onEmojiSelect) {
          this.onEmojiSelect(emojiObj.emoji);
        }
        this.hide();
      });

      emojiContainer.appendChild(emojiBtn);
    });
  }
}

window.EmojiPicker = EmojiPicker;
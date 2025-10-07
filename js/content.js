/**
 * Meetojis Content Script - Entry Point
 * Single Responsibility: Initialize the application
 */

// Initialize the Meetojis controller when DOM is ready
function initializeMeetojis() {
  const controller = new window.MeetojisController();
  controller.init();

  // Store controller globally for potential cleanup
  window.meetojisController = controller;
}

// Start the application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeMeetojis);
} else {
  initializeMeetojis();
}

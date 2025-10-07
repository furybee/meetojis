document.addEventListener('DOMContentLoaded', function () {
  checkGoogleMeetStatus();
});

async function checkGoogleMeetStatus() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const statusElement = document.getElementById('status');

    if (tab && tab.url && tab.url.includes('meet.google.com')) {
      statusElement.className = 'status active';
      statusElement.innerHTML =
        '<strong>Active on Google Meet!</strong><br>' +
        '<small>Look for the <img src="icons/icon48.png" alt="Meetojis icon" width="14" height="14" style="vertical-align: text-bottom; border-radius: 50%;" /> button in the chat</small>';
    } else {
      statusElement.className = 'status inactive';
      statusElement.innerHTML =
        '<strong>Not on Google Meet</strong><br><small>Navigate to meet.google.com to use emojis</small>';
    }
  } catch (error) {
    console.error('Error checking tab status:', error);
    const statusElement = document.getElementById('status');
    statusElement.className = 'status';
    statusElement.innerHTML =
      '<strong>Ready to use!</strong><br><small>Navigate to a Google Meet to start using emojis</small>';
  }
}

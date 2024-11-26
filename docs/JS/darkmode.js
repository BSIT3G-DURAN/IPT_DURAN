// Get references to the dark mode stylesheet, the toggle button, and the button text
const darkModeStyle = document.getElementById('dark-mode-style');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check if dark mode is already enabled in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  darkModeStyle.removeAttribute('disabled'); // Enable dark mode
  darkModeToggle.textContent = 'Light Mode'; // Change button text
} else {
  darkModeStyle.setAttribute('disabled', 'true'); // Keep dark mode disabled by default
  darkModeToggle.textContent = 'Dark Mode'; // Set initial button text
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  if (darkModeStyle.disabled) {
    darkModeStyle.removeAttribute('disabled'); // Enable dark mode
    localStorage.setItem('darkMode', 'enabled'); // Save preference to localStorage
    darkModeToggle.textContent = 'Light Mode'; // Change button text
  } else {
    darkModeStyle.setAttribute('disabled', 'true'); // Disable dark mode
    localStorage.setItem('darkMode', 'disabled'); // Save preference to localStorage
    darkModeToggle.textContent = 'Dark Mode'; // Change button text
  }
});

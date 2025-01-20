// JavaScript for Light/Dark Mode Toggle

// Select the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check and apply the saved theme from localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Add click event listener to the toggle button
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

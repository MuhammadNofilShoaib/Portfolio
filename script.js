document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once or every time
    });

    // Your existing code for theme toggle and smooth scroll
});
document.addEventListener('DOMContentLoaded', function () {
    var themeToggle = document.getElementById('theme-toggle');
    // Ensure the correct theme is applied based on saved preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️ Switch to Light Mode';
    }
    // Toggle dark mode on button click
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        var isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Toggle Dark Mode';
        // Save theme preference in localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
    // Smooth scroll for navigation links
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

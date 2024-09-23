document.addEventListener('DOMContentLoaded', () => {
    const themeToggle: HTMLElement = document.getElementById('theme-toggle')!;
    
    // Ensure the correct theme is applied based on saved preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.textContent = '☀️ Switch to Light Mode';
    }
  
    // Toggle dark mode on button click
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      const isDarkMode = document.body.classList.contains('dark-mode');
      themeToggle.textContent = isDarkMode ? '☀️ Switch to Light Mode' : '🌙 Toggle Dark Mode';
      
      // Save theme preference in localStorage
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  
    // Smooth scroll for navigation links
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('nav ul li a');
    navLinks.forEach(anchor => {
      anchor.addEventListener('click', function(e: Event) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId!) as HTMLElement;
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
  
  
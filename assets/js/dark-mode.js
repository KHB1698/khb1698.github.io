// Dark mode toggle functionality with system preference detection
(function() {
  'use strict';

  // Function to get system theme preference
  function getSystemTheme() {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDark ? 'dark' : 'light';
  }

  // Apply theme on page load
  document.documentElement.setAttribute('data-theme', getSystemTheme());

  // Wait for DOM to be ready
  function initThemeToggle() {
    const toggleButton = document.querySelector('.theme-toggle');
    
    if (!toggleButton) {
      console.warn('Theme toggle button not found');
      return;
    }

    // Toggle theme on button click
    toggleButton.addEventListener('click', function() {
      // Get current theme
      const currentTheme = document.documentElement.getAttribute('data-theme');
      
      // Toggle theme
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      // Update DOM
      document.documentElement.setAttribute('data-theme', newTheme);
      
      // Add rotation animation
      toggleButton.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        toggleButton.style.transform = '';
      }, 300);
    });

    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // For modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', function(e) {
          const newTheme = e.matches ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', newTheme);
        });
      }
      // For older browsers
      else if (mediaQuery.addListener) {
        mediaQuery.addListener(function(e) {
          const newTheme = e.matches ? 'dark' : 'light';
          document.documentElement.setAttribute('data-theme', newTheme);
        });
      }
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();

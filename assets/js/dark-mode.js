// Dark mode toggle with stable initialization and manual preference persistence
(function () {
  'use strict';

  var STORAGE_KEY = 'theme-preference';

  function getSystemTheme() {
    var isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDark ? 'dark' : 'light';
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Ignore storage failures (private mode, blocked storage, etc.)
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  function getInitialTheme() {
    var saved = getSavedTheme();
    if (saved === 'dark' || saved === 'light') return saved;
    return getSystemTheme();
  }

  function initThemeToggle() {
    var toggleButton = document.querySelector('.theme-toggle');
    if (!toggleButton) return;

    // Use already-applied theme if present (set early in head), otherwise compute once.
    var currentTheme = document.documentElement.getAttribute('data-theme') || getInitialTheme();
    applyTheme(currentTheme);

    toggleButton.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      saveTheme(next);

      toggleButton.style.transform = 'rotate(360deg)';
      setTimeout(function () {
        toggleButton.style.transform = '';
      }, 300);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();

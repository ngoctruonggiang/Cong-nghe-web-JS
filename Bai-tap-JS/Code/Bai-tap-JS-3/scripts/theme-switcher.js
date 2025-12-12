(function () {
  "use strict";

  // --- CONFIGURATION ---
  const THEME_KEY = "coffeeShopTheme";
  const BG_COLOR_KEY = "coffeeShopBgColor";
  const themes = ["theme-brown", "theme-green", "theme-rose"];

  // Background color options include the fixed browns plus each theme color.
  const backgroundColors = [
    { name: "Native Brown", value: "#dcb166" },
    { name: "Light Brown", value: "#F5DEB3" },
    { name: "Dark Brown", value: "#7b4a20" },
  ];

  const themeBackgroundColors = {
    "theme-brown": "#dcb166",
    "theme-green": "#c9dc82",
    "theme-rose": "#f3c4c4",
  };

  // --- DOM ELEMENTS ---
  let themeButtons = [];
  let bgColorSelect;

  // --- INITIALIZATION ---
  document.addEventListener("DOMContentLoaded", function () {
    themeButtons = document.querySelectorAll(".theme-btn[data-theme]");
    bgColorSelect = document.getElementById("bg-color-select");

    // Early exit if no controls are found
    if (themeButtons.length === 0 && !bgColorSelect) {
      return;
    }

    // Initialize theme and background color logic
    init();
  });

  /**
   * Main initialization function
   */
  function init() {
    // 1. Populate the background color dropdown with the configured palette.
    populateBgColorOptions();
    
    // 2. Load and apply the saved theme.
    const savedTheme = localStorage.getItem(THEME_KEY) || "theme-brown";
    applyTheme(savedTheme);

    // 3. Load and apply the saved background color.
    const savedBgColor = localStorage.getItem(BG_COLOR_KEY) || backgroundColors[0].value;
    const availableBgColors = backgroundColors.map(c => c.value);

    // Check if the saved color is one of the valid options before applying.
    if (availableBgColors.includes(savedBgColor)) {
      applyBgColor(savedBgColor);
      if (bgColorSelect) {
        bgColorSelect.value = savedBgColor;
      }
    } else {
      // If not valid, apply the default and save it.
      const defaultBgColor = backgroundColors[0].value;
      applyBgColor(defaultBgColor);
      localStorage.setItem(BG_COLOR_KEY, defaultBgColor);
    }

    // 4. Attach all event listeners.
    setupEventListeners();
  }

  /**
   * Attaches event listeners for theme buttons and the color picker.
   */
  function setupEventListeners() {
    // Theme button clicks
    themeButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const newTheme = this.dataset.theme;
        if (newTheme) {
          applyTheme(newTheme, { syncBgColor: true });
          localStorage.setItem(THEME_KEY, newTheme);
        }
      });
    });

    // Background color dropdown change
    if (bgColorSelect) {
      bgColorSelect.addEventListener("change", function () {
        const color = this.value;
        applyBgColor(color);
        localStorage.setItem(BG_COLOR_KEY, color);
      });
    }
  }

  /**
   * Applies a new theme to the page and optionally syncs the background color.
   * @param {string} theme - The name of the theme to apply.
   * @param {Object} options - Optional behavior overrides.
   * @param {boolean} options.syncBgColor - When true, force the background to match the theme.
   */
  function applyTheme(theme, { syncBgColor = false } = {}) {
    // 1. Update body class for CSS variables
    document.body.classList.remove(...themes);
    if (theme && themes.includes(theme)) {
      document.body.classList.add(theme);
    }

    // 2. Update active state on theme buttons
    themeButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });

    // 3. Optionally sync the background color with the selected theme.
    if (syncBgColor) {
      syncThemeBackgroundColor(theme);
    }
  }

  /**
   * Populates the options in the background color dropdown.
   * This is now run only once on initialization.
   */
  function populateBgColorOptions() {
    if (!bgColorSelect) return;

    bgColorSelect.innerHTML = ""; // Clear old options

    backgroundColors.forEach((color) => {
      const option = document.createElement("option");
      option.value = color.value;
      option.textContent = color.name;
      bgColorSelect.appendChild(option);
    });
  }

  /**
   * Applies a background color to the body.
   * @param {string} color - The CSS color value.
   */
  function applyBgColor(color) {
    document.body.style.backgroundColor = color;
  }

  /**
   * Ensures the background color follows the current theme selection.
   */
  function syncThemeBackgroundColor(theme) {
    const themeColor = themeBackgroundColors[theme];
    if (!themeColor) {
      return;
    }

    applyBgColor(themeColor);
    localStorage.setItem(BG_COLOR_KEY, themeColor);

    if (!bgColorSelect) {
      return;
    }

    const hasMatchingOption = Array.from(bgColorSelect.options).some(
      (option) => option.value === themeColor
    );

    if (hasMatchingOption) {
      bgColorSelect.value = themeColor;
    }
  }
})();

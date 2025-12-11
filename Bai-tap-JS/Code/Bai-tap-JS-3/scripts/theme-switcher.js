(function () {
  "use strict";

  // --- CONFIGURATION ---
  const THEME_KEY = "coffeeShopTheme";
  const BG_COLOR_KEY = "coffeeShopBgColor";
  const themes = ["theme-brown", "theme-green", "theme-rose"];

  // Theme-specific background color options
  const themeColors = {
    "theme-brown": [
      { name: "Native Brown", value: "#dcb166" },
      { name: "Light Brown", value: "#F5DEB3" },
      { name: "Dark Brown", value: "#7b4a20" },
    ],
    "theme-green": [
      { name: "Native Green", value: "#c9dc82" },
      { name: "Light Green", value: "#e2f0a5" },
      { name: "Dark Green", value: "#a9bb6b" },
    ],
    "theme-rose": [
      { name: "Native Rose", value: "#f3c4c4" },
      { name: "Light Rose", value: "#f9dada" },
      { name: "Dark Rose", value: "#e8a6a6" },
    ],
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
    const savedTheme = localStorage.getItem(THEME_KEY) || "theme-brown";
    
    // Apply the theme. This function now also handles updating the BG color picker
    // and setting a default BG color.
    applyTheme(savedTheme, false); // `false` indicates this is not a user click

    // Now, check if a specific background color was saved and is valid for the current theme.
    // If so, apply it over the default.
    const savedBgColor = localStorage.getItem(BG_COLOR_KEY);
    const currentThemeColors = (themeColors[savedTheme] || []).map(c => c.value);

    if (savedBgColor && currentThemeColors.includes(savedBgColor)) {
      applyBgColor(savedBgColor);
      if (bgColorSelect) {
        bgColorSelect.value = savedBgColor;
      }
    }

    // Attach all event listeners
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
          applyTheme(newTheme, true); // `true` indicates this is a user click
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
   * Applies a new theme to the page.
   * @param {string} theme - The name of the theme to apply.
   * @param {boolean} isUserClick - True if triggered by a user click, changes behavior for BG color.
   */
  function applyTheme(theme, isUserClick) {
    // 1. Update body class for CSS variables
    document.body.classList.remove(...themes);
    if (theme && themes.includes(theme)) {
      document.body.classList.add(theme);
    }

    // 2. Update active state on theme buttons
    themeButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });

    // 3. Update the background color picker options
    updateBgColorOptions(theme);

    // 4. If triggered by a user clicking a new theme, apply the default BG color for that theme.
    //    On initial load, we wait to see if a specific saved color should be used.
    if (isUserClick) {
      const defaultBgColor = themeColors[theme] ? themeColors[theme][0].value : "#dcb166";
      applyBgColor(defaultBgColor);
      localStorage.setItem(BG_COLOR_KEY, defaultBgColor);
      if (bgColorSelect) {
        bgColorSelect.value = defaultBgColor;
      }
    }
  }

  /**
   * Updates the options in the background color dropdown based on the current theme.
   * @param {string} theme - The currently active theme.
   */
  function updateBgColorOptions(theme) {
    if (!bgColorSelect) return;

    const colors = themeColors[theme] || themeColors["theme-brown"];
    bgColorSelect.innerHTML = ""; // Clear old options

    colors.forEach((color) => {
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
})();
(function () {
  "use strict";

  const THEME_KEY = "coffeeShopTheme";
  const BG_COLOR_KEY = "coffeeShopBgColor";

  const themes = ["theme-brown", "theme-green", "theme-rose"];

  // DOM Elements
  let themeButtons = [];
  let bgColorSelect;

  document.addEventListener("DOMContentLoaded", function () {
    themeButtons = document.querySelectorAll(".theme-btn[data-theme]");
    bgColorSelect = document.getElementById("bg-color-select");

    // Early exit if controls aren't on the page
    if (themeButtons.length === 0 && !bgColorSelect) {
      return;
    }
    
    if (themeButtons.length > 0) {
      initTheme();
    }

    if (bgColorSelect) {
      initBgColor();
    }
  });

  /**
   * THEME SWITCHER LOGIC
   */
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    // Apply saved theme or default
    if (savedTheme && themes.includes(savedTheme)) {
      applyTheme(savedTheme);
    } else {
      applyTheme("theme-brown"); // Default theme
    }

    // Add event listeners to buttons
    themeButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const theme = this.dataset.theme;
        if (theme) {
          applyTheme(theme);
          localStorage.setItem(THEME_KEY, theme);
        }
      });
    });
  }

  function applyTheme(theme) {
    // Remove all possible theme classes from body
    document.body.classList.remove(...themes);

    // Add the new theme class
    if (theme && themes.includes(theme)) {
        document.body.classList.add(theme);
    }

    // Update active state on buttons
    themeButtons.forEach((btn) => {
      if (btn.dataset.theme === theme) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  /**
   * BACKGROUND COLOR CHANGER LOGIC
   */
  function initBgColor() {
    const savedBgColor = localStorage.getItem(BG_COLOR_KEY);

    // Apply saved color
    if (savedBgColor) {
      applyBgColor(savedBgColor);
      if (
        [...bgColorSelect.options].some((option) => option.value === savedBgColor)
      ) {
        bgColorSelect.value = savedBgColor;
      }
    }

    // Add event listener to select dropdown
    bgColorSelect.addEventListener("change", function () {
      const color = this.value;
      applyBgColor(color);
      localStorage.setItem(BG_COLOR_KEY, color);
    });
  }

  function applyBgColor(color) {
    document.body.style.backgroundColor = color;
  }
})();

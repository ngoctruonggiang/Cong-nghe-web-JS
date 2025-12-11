/**
 * Snow Animation Script
 * Creates falling snowflakes effect
 */

(function () {
  "use strict";

  // Configuration
  const config = {
    snowflakeCount: 50,
    minSize: 10,
    maxSize: 25,
    minDuration: 8,
    maxDuration: 15,
    minOpacity: 0.4,
    maxOpacity: 0.9,
  };

  // Get container
  const container = document.getElementById("snow-container");

  if (!container) {
    console.warn("Snow container not found");
    return;
  }

  /**
   * Create a single snowflake element
   */
  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerHTML = "❄";

    // Random properties
    const size =
      Math.random() * (config.maxSize - config.minSize) + config.minSize;
    const startPos = Math.random() * 100;
    const duration =
      Math.random() * (config.maxDuration - config.minDuration) +
      config.minDuration;
    const delay = Math.random() * 5;
    const opacity =
      Math.random() * (config.maxOpacity - config.minOpacity) +
      config.minOpacity;

    // Apply styles
    snowflake.style.fontSize = size + "px";
    snowflake.style.left = startPos + "%";
    snowflake.style.opacity = opacity;
    snowflake.style.animationDuration = duration + "s";
    snowflake.style.animationDelay = delay + "s";

    return snowflake;
  }

  /**
   * Initialize snowfall
   */
  function initSnow() {
    // Create snowflakes
    for (let i = 0; i < config.snowflakeCount; i++) {
      const snowflake = createSnowflake();
      container.appendChild(snowflake);
    }
  }

  /**
   * Remove all snowflakes
   */
  function clearSnow() {
    container.innerHTML = "";
  }

  /**
   * Restart snow animation
   */
  function restartSnow() {
    clearSnow();
    initSnow();
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnow);
  } else {
    initSnow();
  }

  // Expose functions globally if needed
  window.snowAnimation = {
    start: initSnow,
    stop: clearSnow,
    restart: restartSnow,
  };
})();

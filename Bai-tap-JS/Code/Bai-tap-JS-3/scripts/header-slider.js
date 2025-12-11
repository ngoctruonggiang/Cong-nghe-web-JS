/**
 * Header Background Slider
 * Auto-rotating background images in header
 */

(function () {
  "use strict";

  // Configuration
  const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds

  // Wait for DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    // Get slider elements
    const slides = document.querySelectorAll(".header-slide");
    const dots = document.querySelectorAll(".slider-dots .dot");

    // Check if elements exist
    if (!slides.length || !dots.length) {
      return;
    }

    let currentIndex = 0;
    let autoSlideTimer;

    /**
     * Show slide at specified index
     */
    function showSlide(index) {
      // Remove active class from all
      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));

      // Add active to current
      slides[index].classList.add("active");
      dots[index].classList.add("active");

      currentIndex = index;
    }

    /**
     * Go to next slide
     */
    function nextSlide() {
      let next = currentIndex + 1;
      if (next >= slides.length) {
        next = 0;
      }
      showSlide(next);
    }

    /**
     * Start auto slide
     */
    function startAutoSlide() {
      autoSlideTimer = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    }

    /**
     * Stop auto slide
     */
    function stopAutoSlide() {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
      }
    }

    /**
     * Restart auto slide
     */
    function restartAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        restartAutoSlide();
      });
    });

    // Pause on header hover
    const header = document.querySelector(".header");
    if (header) {
      header.addEventListener("mouseenter", stopAutoSlide);
      header.addEventListener("mouseleave", startAutoSlide);
    }

    // Pause when page is hidden (battery saving)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopAutoSlide();
      } else {
        startAutoSlide();
      }
    });

    // Initialize
    showSlide(0);
    startAutoSlide();
  }
})();

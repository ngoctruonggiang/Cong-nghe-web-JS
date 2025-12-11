/**
 * ========================================
 * CONTENT SLIDER JAVASCRIPT
 * For blackcoffee.html product image slider
 * ========================================
 */

(function () {
  "use strict";

  /**
   * ContentSlider - A simple, custom vanilla JS image slider
   * @param {string} containerId - The ID of the slider container
   * @param {Object} options - Configuration options
   */
  function ContentSlider(containerId, options) {
    // Default options
    const defaults = {
      autoRotate: true,
      rotateInterval: 5000, // 5 seconds
      paginationId: "paginate-" + containerId,
    };

    // Merge options with defaults
    this.options = Object.assign({}, defaults, options);

    // Get elements
    this.container = document.getElementById(containerId);
    this.pagination = document.getElementById(this.options.paginationId);

    // Check if elements exist
    if (!this.container) {
      console.error("Slider container not found: " + containerId);
      return;
    }

    // Get all content divs (slides)
    this.slides = this.container.querySelectorAll(".contentdiv");

    if (!this.slides.length) {
      console.error("No slides found in container: " + containerId);
      return;
    }

    // Get pagination links
    this.paginationLinks = this.pagination
      ? this.pagination.querySelectorAll("a")
      : [];

    // Current slide index
    this.currentIndex = 0;

    // Auto-rotate timer
    this.autoRotateTimer = null;

    // Initialize
    this.init();
  }

  /**
   * Initialize the slider
   */
  ContentSlider.prototype.init = function () {
    // Show first slide
    this.showSlide(0);

    // Set up pagination click events
    this.setupPagination();

    // Start auto-rotation if enabled
    if (this.options.autoRotate) {
      this.startAutoRotate();
    }

    // Add hover events to pause auto-rotation
    this.setupHoverEvents();
  };

  /**
   * Show slide at specified index
   * @param {number} index - The index of the slide to show
   */
  ContentSlider.prototype.showSlide = function (index) {
    // Validate index
    if (index < 0 || index >= this.slides.length) {
      return;
    }

    // Remove active class from all slides
    this.slides.forEach(function (slide) {
      slide.classList.remove("active");
    });

    // Add active class to current slide
    this.slides[index].classList.add("active");

    // Update pagination
    if (this.paginationLinks.length) {
      this.paginationLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      if (this.paginationLinks[index]) {
        this.paginationLinks[index].classList.add("active");
      }
    }

    // Update current index
    this.currentIndex = index;
  };

  /**
   * Go to next slide
   */
  ContentSlider.prototype.nextSlide = function () {
    let next = this.currentIndex + 1;
    if (next >= this.slides.length) {
      next = 0; // Loop back to first slide
    }
    this.showSlide(next);
  };

  /**
   * Go to previous slide
   */
  ContentSlider.prototype.prevSlide = function () {
    let prev = this.currentIndex - 1;
    if (prev < 0) {
      prev = this.slides.length - 1; // Loop to last slide
    }
    this.showSlide(prev);
  };

  /**
   * Set up pagination click events
   */
  ContentSlider.prototype.setupPagination = function () {
    const self = this;

    if (!this.paginationLinks.length) {
      return;
    }

    this.paginationLinks.forEach(function (link, index) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        // Get slide index from data attribute
        const slideIndex = parseInt(link.getAttribute("data-slide"), 10);

        if (!isNaN(slideIndex)) {
          self.showSlide(slideIndex);
          self.restartAutoRotate();
        }
      });
    });
  };

  /**
   * Start automatic rotation
   */
  ContentSlider.prototype.startAutoRotate = function () {
    const self = this;

    this.autoRotateTimer = setInterval(function () {
      self.nextSlide();
    }, this.options.rotateInterval);
  };

  /**
   * Stop automatic rotation
   */
  ContentSlider.prototype.stopAutoRotate = function () {
    if (this.autoRotateTimer) {
      clearInterval(this.autoRotateTimer);
      this.autoRotateTimer = null;
    }
  };

  /**
   * Restart automatic rotation
   */
  ContentSlider.prototype.restartAutoRotate = function () {
    if (this.options.autoRotate) {
      this.stopAutoRotate();
      this.startAutoRotate();
    }
  };

  /**
   * Set up hover events to pause auto-rotation
   */
  ContentSlider.prototype.setupHoverEvents = function () {
    const self = this;

    this.container.addEventListener("mouseenter", function () {
      self.stopAutoRotate();
    });

    this.container.addEventListener("mouseleave", function () {
      if (self.options.autoRotate) {
        self.startAutoRotate();
      }
    });
  };

  // Wait for DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Initialize slider for blackcoffee.html
    const slider2 = document.getElementById("slider2");

    if (slider2) {
      // Create new ContentSlider instance
      new ContentSlider("slider2", {
        autoRotate: true,
        rotateInterval: 5000,
      });
    }
  });
})();

/**
 * ========================================
 * SLIDER JAVASCRIPT
 * For home.html banner slideshow
 * ========================================
 */

// Current slide index
let slideIndex = 1;
let autoSlideTimer;

// Initialize slider when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  startAutoSlide();
});

/**
 * Next/Previous controls
 */
function plusSlides(n) {
  showSlides((slideIndex += n));
  resetAutoSlide();
}

/**
 * Dot/Thumbnail controls
 */
function currentSlide(n) {
  showSlides((slideIndex = n));
  resetAutoSlide();
}

/**
 * Show slides function - ONLY ONE SLIDE VISIBLE AT A TIME
 */
function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");

  // Check if slides exist
  if (!slides.length) {
    return;
  }

  // Wrap around if index out of bounds
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // HIDE all slides first
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active");
  }

  // Remove active from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // SHOW only the current slide
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");

  // Mark current dot as active
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }
}

/**
 * Auto advance slides
 */
function autoAdvanceSlides() {
  slideIndex++;
  showSlides(slideIndex);
}

/**
 * Start auto slide
 */
function startAutoSlide() {
  autoSlideTimer = setInterval(autoAdvanceSlides, 4000); // 4 seconds
}

/**
 * Reset auto slide (when user interacts)
 */
function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

/**
 * Pause auto slide when page is hidden
 */
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    clearInterval(autoSlideTimer);
  } else {
    startAutoSlide();
  }
});

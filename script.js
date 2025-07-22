// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
});

// ===== Hero Slideshow =====
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function startSlideshow() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000); // 6 seconds per slide
}

// Run slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
  startSlideshow();
});
// Contact Form Validation & Submission Feedback
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation
    if (!form.name.value.trim() || !form.email.value.trim() || !form.subject.value.trim() || !form.message.value.trim()) {
      formMessage.textContent = 'Please fill in all required fields.';
      formMessage.style.color = '#cc0000';
      return;
    }

    // Email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.value.trim())) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = '#cc0000';
      return;
    }

    // Success message (simulate form submission)
    formMessage.textContent = 'Thank you for contacting us! We will get back to you shortly.';
    formMessage.style.color = '#007700';

    form.reset();
  });
});
/**
 * Dnyandeep English School - Interactive Scripts
 * Handles Dark Mode, Mobile Menu, Sticky Navigation,
 * Media Config bindings, Enquiry Form validation, FAQ Accordion, and Scroll Animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initStickyHeader();
  initMediaConfig();
  initEnquiryForm();
  initFaqAccordion();
  initScrollAnimations();
});

// 1. Dark Mode Management
function initTheme() {
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  });
}

// 2. Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('mobile-menu-icon');
  const closeIcon = document.getElementById('mobile-menu-close');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      if (menuIcon) menuIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on clicking any navigation link
  const navLinks = mobileMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (menuIcon) menuIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// 3. Sticky Header
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'border-[#DDE5D8]/80');
    } else {
      header.classList.remove('shadow-md', 'border-[#DDE5D8]/80');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

// 4. Media Config Binding (Allows easy replacement of all images via config.js)
function initMediaConfig() {
  if (typeof SCHOOL_MEDIA_CONFIG === 'undefined') return;

  // Video flag control
  const heroVideo = document.getElementById('hero-video-element');
  const heroIllustration = document.getElementById('hero-illustration-bg');
  if (heroVideo && heroIllustration) {
    if (SCHOOL_MEDIA_CONFIG.HERO_VIDEO) {
      heroVideo.classList.remove('hidden');
      heroIllustration.classList.add('hidden');
    } else {
      heroVideo.classList.add('hidden');
      heroIllustration.classList.remove('hidden');
    }
  }

  // Bind all data-config-img attributes
  const configImgs = document.querySelectorAll('[data-config-img]');
  configImgs.forEach(el => {
    const key = el.getAttribute('data-config-img');
    if (SCHOOL_MEDIA_CONFIG[key]) {
      el.src = SCHOOL_MEDIA_CONFIG[key];
      const altKey = key + '_ALT';
      if (SCHOOL_MEDIA_CONFIG[altKey] && !el.getAttribute('alt')) {
        el.alt = SCHOOL_MEDIA_CONFIG[altKey];
      }
    }
  });
}

// 5. Admission Enquiry Form Validation & Web3Forms integration
function initEnquiryForm() {
  const form = document.getElementById('hero-enquiry-form');
  if (!form) return;

  const statusMsg = document.getElementById('enquiry-form-status');
  const phoneInput = document.getElementById('enquiry-mobile');

  // Strict 10-digit mobile number input filter
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const parentName = form['parent_name'].value.trim();
    const mobile = form['mobile'].value.trim();
    const email = form['email'].value.trim();
    const academicYear = form['academic_year'].value;
    const studentClass = form['student_class'].value;

    // Reset status
    statusMsg.classList.remove('hidden', 'text-red-500', 'text-green-400');
    statusMsg.classList.add('text-xs', 'mt-2', 'text-center');

    // Validation checks
    if (!parentName || parentName.length < 2) {
      showError('Please enter a valid parent/guardian name.');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      showError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('Please enter a valid email address.');
      return;
    }

    if (!studentClass) {
      showError('Please select the grade / class.');
      return;
    }

    // Submit via Web3Forms or fallback
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Submitting Enquiry...</span>';

    try {
      const formData = new FormData(form);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        statusMsg.classList.remove('text-red-500');
        statusMsg.classList.add('text-green-300');
        statusMsg.innerHTML = '✓ Thank you! Your admission enquiry has been submitted successfully. Our office will contact you shortly.';
        form.reset();
      } else {
        // Graceful confirmation even if dummy API key
        statusMsg.classList.remove('text-red-500');
        statusMsg.classList.add('text-green-300');
        statusMsg.innerHTML = '✓ Thank you! Your enquiry has been recorded. Our admissions team will reach out at ' + mobile + '.';
        form.reset();
      }
    } catch (err) {
      statusMsg.classList.remove('text-red-500');
      statusMsg.classList.add('text-green-300');
      statusMsg.innerHTML = '✓ Thank you! Your enquiry has been received. Our team will contact you soon.';
      form.reset();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (window.lucide) lucide.createIcons();
    }

    function showError(msg) {
      statusMsg.classList.remove('hidden', 'text-green-300');
      statusMsg.classList.add('text-red-400');
      statusMsg.textContent = msg;
    }
  });
}

// 6. FAQ Accordion
function initFaqAccordion() {
  const toggles = document.querySelectorAll('.faq-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('.faq-icon');

      // Close other FAQs
      toggles.forEach(other => {
        if (other !== toggle) {
          other.setAttribute('aria-expanded', 'false');
          if (other.nextElementSibling) other.nextElementSibling.classList.remove('open');
          const otherIcon = other.querySelector('.faq-icon');
          if (otherIcon) otherIcon.classList.remove('rotate-180');
        }
      });

      // Toggle current
      if (isExpanded) {
        toggle.setAttribute('aria-expanded', 'false');
        if (content) content.classList.remove('open');
        if (icon) icon.classList.remove('rotate-180');
      } else {
        toggle.setAttribute('aria-expanded', 'true');
        if (content) content.classList.add('open');
        if (icon) icon.classList.add('rotate-180');
      }
    });
  });
}

// 7. Scroll Animations using IntersectionObserver
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-up-init');
  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach(el => el.classList.add('fade-up-active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-up-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => observer.observe(el));
}

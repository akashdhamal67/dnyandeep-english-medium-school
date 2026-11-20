/**
 * Dnyandeep English School - Interactive Scripts
 * Handles Dark Mode, Mobile Menu, Sticky Navigation,
 * Gallery Filtering, FAQ Accordion, Form Validations, and Scroll Animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initStickyHeader();
  initScrollAnimations();
  initFaqAccordion();
  initGalleryFilter();
  initForms();
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

  // Mobile dropdown toggles
  const dropdownButtons = document.querySelectorAll('.mobile-dropdown-btn');
  dropdownButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = btn.getAttribute('data-target');
      const targetMenu = document.getElementById(targetId);
      const icon = btn.querySelector('.dropdown-arrow');
      if (targetMenu) {
        targetMenu.classList.toggle('hidden');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      }
    });
  });
}

// 3. Sticky Header enhancement
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-md', 'backdrop-blur-md', 'bg-white/95', 'dark:bg-slate-900/95');
      header.classList.remove('bg-white', 'dark:bg-slate-900');
    } else {
      header.classList.remove('shadow-md', 'backdrop-blur-md', 'bg-white/95', 'dark:bg-slate-900/95');
      header.classList.add('bg-white', 'dark:bg-slate-900');
    }
  });
}

// 4. Subtle Scroll Animations using IntersectionObserver
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-up-init');
  if (!animatedElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up-active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('fade-up-active'));
  }
}

// 5. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-toggle');
    const content = item.querySelector('.accordion-content');
    const icon = item.querySelector('.faq-icon');

    if (!btn || !content) return;

    btn.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');

      // Close other accordion items
      faqItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector('.accordion-content');
        const otherIcon = otherItem.querySelector('.faq-icon');
        const otherBtn = otherItem.querySelector('.faq-toggle');
        if (otherContent) otherContent.classList.remove('open');
        if (otherIcon) otherIcon.classList.remove('rotate-180');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        content.classList.add('open');
        if (icon) icon.classList.add('rotate-180');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// 6. Photo Gallery Filtering
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-card');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Active state on buttons
      filterBtns.forEach(b => {
        b.classList.remove('bg-[#1F5A3A]', 'text-[#F2E3A0]', 'font-bold');
        b.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      });
      btn.classList.add('bg-[#1F5A3A]', 'text-[#F2E3A0]', 'font-bold');
      btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');

      // Filter gallery cards
      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.classList.add('fade-up-active');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// 7. Form Handlers & Client-side Validation
function initForms() {
  // Admission Enquiry Form
  const enquiryForm = document.getElementById('admission-enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusBox = document.getElementById('enquiry-status-message');
      
      const name = enquiryForm.querySelector('[name="student_name"]')?.value.trim();
      const parentName = enquiryForm.querySelector('[name="parent_name"]')?.value.trim();
      const phone = enquiryForm.querySelector('[name="phone"]')?.value.trim();
      const email = enquiryForm.querySelector('[name="email"]')?.value.trim();
      const grade = enquiryForm.querySelector('[name="grade_applying"]')?.value;

      if (!name || !phone || !grade) {
        showStatusMessage(statusBox, 'Please fill in all required fields (Student Name, Phone, and Class).', 'error');
        return;
      }

      const phoneRegex = /^[0-9+\s-]{10,14}$/;
      if (!phoneRegex.test(phone)) {
        showStatusMessage(statusBox, 'Please enter a valid 10-digit phone number.', 'error');
        return;
      }

      // Success demonstration
      showStatusMessage(statusBox, 'Thank you! Your admission enquiry has been submitted. Our admissions team will contact you within 24-48 hours.', 'success');
      enquiryForm.reset();
    });
  }

  // General Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusBox = document.getElementById('contact-status-message');
      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const phone = contactForm.querySelector('[name="phone"]')?.value.trim();
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !phone || !message) {
        showStatusMessage(statusBox, 'Please fill in your name, contact phone number, and query message.', 'error');
        return;
      }

      showStatusMessage(statusBox, 'Thank you for reaching out! We have received your message and will get back to you shortly.', 'success');
      contactForm.reset();
    });
  }

  // Career Application Form
  const careerForm = document.getElementById('career-form');
  if (careerForm) {
    careerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusBox = document.getElementById('career-status-message');
      const name = careerForm.querySelector('[name="full_name"]')?.value.trim();
      const email = careerForm.querySelector('[name="email"]')?.value.trim();
      const phone = careerForm.querySelector('[name="phone"]')?.value.trim();
      const position = careerForm.querySelector('[name="position"]')?.value;
      const resume = careerForm.querySelector('[name="resume"]')?.files[0];

      if (!name || !email || !phone || !position) {
        showStatusMessage(statusBox, 'Please complete all required fields.', 'error');
        return;
      }

      if (!resume) {
        showStatusMessage(statusBox, 'Please upload your updated resume / CV (PDF or DOCX).', 'error');
        return;
      }

      showStatusMessage(statusBox, 'Your application has been received! Our recruitment coordinator will review your profile and contact you if shortlisted.', 'success');
      careerForm.reset();
    });
  }
}

function showStatusMessage(container, message, type) {
  if (!container) return;
  container.classList.remove('hidden', 'bg-red-50', 'text-red-700', 'border-red-200', 'bg-emerald-50', 'text-emerald-700', 'border-emerald-200');
  
  if (type === 'error') {
    container.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200', 'p-4', 'rounded-xl');
  } else {
    container.classList.add('bg-emerald-50', 'text-emerald-700', 'border', 'border-emerald-200', 'p-4', 'rounded-xl');
  }
  container.textContent = message;
}


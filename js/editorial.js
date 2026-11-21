/**
 * Dnyandeep English Medium School & Jr. College
 * Editorial & Institutional Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollReveals();
  initAccordion();
});

// 1. Sticky Header Elevation on Scroll
function initStickyHeader() {
  const header = document.getElementById('institutional-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 2. Clean Accessible Mobile Menu
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-institutional-nav');
  const menuIcon = document.getElementById('menu-icon-svg');
  const closeIcon = document.getElementById('close-icon-svg');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mobileNav.classList.toggle('hidden');

    if (menuIcon && closeIcon) {
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }

    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close when clicking nav links
  const links = mobileNav.querySelectorAll('a');
  links.forEach(l => {
    l.addEventListener('click', () => {
      mobileNav.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (menuIcon && closeIcon) {
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  });
}

// 3. Subtle Editorial Scroll Reveals
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.fade-in-viewport');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => observer.observe(el));
}

// 4. Subtle Clean Accordion for Admission FAQs
function initAccordion() {
  const accordionButtons = document.querySelectorAll('.editorial-accordion-btn');
  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const panel = btn.nextElementSibling;
      const chevron = btn.querySelector('.chevron-indicator');

      // Toggle current
      btn.setAttribute('aria-expanded', !isExpanded);
      if (panel) {
        if (!isExpanded) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.classList.remove('hidden');
          if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
          panel.style.maxHeight = '0px';
          setTimeout(() => panel.classList.add('hidden'), 250);
          if (chevron) chevron.style.transform = 'rotate(0deg)';
        }
      }
    });
  });
}

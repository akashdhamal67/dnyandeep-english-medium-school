/**
 * DNYANDEEP ENGLISH MEDIUM SCHOOL & JR. COLLEGE
 * The Doon School Inspired Institutional Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Elevation on Scroll
  const header = document.querySelector('.site-header-doon');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Fullscreen Menu Overlay Toggle (The Doon School Style Drawer)
  const menuBtn = document.getElementById('doon-menu-btn');
  const drawerOverlay = document.getElementById('doon-drawer-overlay');
  const drawerCloseBtn = document.getElementById('doon-drawer-close');

  if (menuBtn && drawerOverlay) {
    const openMenu = () => {
      drawerOverlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
      if (drawerCloseBtn) drawerCloseBtn.focus();
    };

    const closeMenu = () => {
      drawerOverlay.classList.remove('is-active');
      document.body.style.overflow = '';
      menuBtn.focus();
    };

    menuBtn.addEventListener('click', openMenu);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMenu);

    // Escape key closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawerOverlay.classList.contains('is-active')) {
        closeMenu();
      }
    });
  }

  // 3. Intersection Observer for Subtle Editorial Reveals
  const observeElements = document.querySelectorAll('.fade-in-observe');
  if ('IntersectionObserver' in window && observeElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observeElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if observer not supported
    observeElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 4. Lucide icons initializer if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});

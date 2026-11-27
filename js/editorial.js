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

  // ==========================================================================
  // THEME SWITCHER CONTROLLER (Live Preview: Maroon, Orange, Navy)
  // [NOTE: Can be easily removed before final production launch]
  // ==========================================================================
  (function initThemeSwitcher() {
    const THEME_KEY = 'dnyandeep_school_theme';
    const DEFAULT_THEME = 'maroon';

    // Retrieve saved theme or default to maroon
    let currentTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Create floating switcher if not already present
    if (!document.querySelector('.dnyandeep-theme-switcher')) {
      const switcher = document.createElement('div');
      switcher.className = 'dnyandeep-theme-switcher';
      switcher.setAttribute('role', 'region');
      switcher.setAttribute('aria-label', 'Theme Selector Preview');

      switcher.innerHTML = [
        '<span class="dnyandeep-theme-switcher-label">Theme</span>',
        '<button type="button" class="theme-pill-btn" data-theme-name="maroon" title="Theme 1: Maroon (Default)" aria-label="Maroon Theme"></button>',
        '<button type="button" class="theme-pill-btn" data-theme-name="orange" title="Theme 2: Flame Orange" aria-label="Orange Theme"></button>',
        '<button type="button" class="theme-pill-btn" data-theme-name="navy" title="Theme 3: Classic Navy" aria-label="Navy Theme"></button>'
      ].join('');

      document.body.appendChild(switcher);

      const updateActiveButtons = (theme) => {
        switcher.querySelectorAll('.theme-pill-btn').forEach((btn) => {
          if (btn.getAttribute('data-theme-name') === theme) {
            btn.classList.add('is-active');
          } else {
            btn.classList.remove('is-active');
          }
        });
      };

      updateActiveButtons(currentTheme);

      switcher.querySelectorAll('.theme-pill-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const selected = btn.getAttribute('data-theme-name');
          document.documentElement.setAttribute('data-theme', selected);
          localStorage.setItem(THEME_KEY, selected);
          updateActiveButtons(selected);
        });
      });
    }
  })();

});

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

    // Close on click outside (clicking on the drawer backdrop overlay)
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) {
        closeMenu();
      }
    });

    // Close on click of any link inside the drawer
    drawerOverlay.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

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

  // 4. Hero Background Video Handling (Autoplay on Desktop & Mobile, Smooth Loop, Controls)
  const heroVideo = document.getElementById('hero-bg-video');
  const heroToggleBtn = document.getElementById('hero-video-toggle');
  const heroSection = document.getElementById('hero-section');

  if (heroVideo) {
    let isManuallyPaused = false;

    const updateToggleButton = (paused) => {
      if (!heroToggleBtn) return;
      heroToggleBtn.setAttribute('aria-label', paused ? 'Play background video' : 'Pause background video');
      heroToggleBtn.setAttribute('title', paused ? 'Play background video' : 'Pause background video');
      heroToggleBtn.innerHTML = paused 
        ? '<i data-lucide="play" class="w-4 h-4"></i>' 
        : '<i data-lucide="pause" class="w-4 h-4"></i>';
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    };

    // Attempt video playback on load and log any issues
    const attemptPlay = () => {
      heroVideo.muted = true;
      const playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            isManuallyPaused = false;
            updateToggleButton(false);
          })
          .catch((err) => {
            console.warn('Hero video autoplay was prevented or failed; poster fallback displayed.', err);
            updateToggleButton(true);
          });
      }
    };

    attemptPlay();

    // Play / Pause button interaction
    if (heroToggleBtn) {
      heroToggleBtn.addEventListener('click', () => {
        if (heroVideo.paused) {
          heroVideo.play().then(() => {
            isManuallyPaused = false;
            updateToggleButton(false);
          }).catch((err) => {
            console.warn('Play attempt failed:', err);
          });
        } else {
          heroVideo.pause();
          isManuallyPaused = true;
          updateToggleButton(true);
        }
      });
    }

    // Smooth loop handling: fade video out 0.5s before end and fade in at loop point
    heroVideo.addEventListener('timeupdate', () => {
      if (!heroVideo.duration) return;
      const timeLeft = heroVideo.duration - heroVideo.currentTime;
      if (timeLeft < 0.5 && !heroVideo.classList.contains('loop-fade')) {
        heroVideo.classList.add('loop-fade');
      } else if (heroVideo.currentTime < 0.5 && heroVideo.classList.contains('loop-fade')) {
        heroVideo.classList.remove('loop-fade');
      }
    });

    // Pause when hero scrolled out of view or resume when visible
    if ('IntersectionObserver' in window && heroSection) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!isManuallyPaused && heroVideo.paused) {
                heroVideo.play().catch(() => {});
                updateToggleButton(false);
              }
            } else {
              if (!heroVideo.paused) {
                heroVideo.pause();
              }
            }
          });
        },
        { threshold: 0.15 }
      );
      heroObserver.observe(heroSection);
    }

    // Pause when browser tab is hidden, resume when active
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (!heroVideo.paused) heroVideo.pause();
      } else {
        if (!isManuallyPaused && (!heroSection || heroSection.getBoundingClientRect().bottom > 0)) {
          heroVideo.play().catch(() => {});
          updateToggleButton(false);
        }
      }
    });
  }

  // 5. Lucide icons initializer if available
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});

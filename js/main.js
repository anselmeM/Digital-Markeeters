/**
 * Marcy Studios - Main JS
 * Premium Motion & Interaction Engine
 */

// Slide Toggle Implementation (Preserved for compatibility)
function slideToggle(target, duration = 400) {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

function slideUp(target, duration = 400) {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.boxSizing = 'border-box';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight; // force reflow
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function() {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

function slideDown(target, duration = 400) {
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight; // force reflow
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function() {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

// ═══════════════════════════════════════
// PREMIUM MOTION & ENGINE INTERACTION
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // Register ScrollTrigger plugin
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // Detect Touch Device
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Initialize smooth scroll (Lenis) if not touch device
  let lenisInstance = null;
  if (!isTouchDevice && typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      normalizeWheel: true,
      smoothWheel: true
    });
    window.lenisInstance = lenisInstance;

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisInstance.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // Global Interactive Cursor
  initCustomCursor(isTouchDevice);

  // Preloader Logic
  initPreloader(() => {
    // Callback after preloader animation finishes
    startPageEntranceAnimations(isTouchDevice);
  });

  // Magnetic Button Interactions
  initMagnetics(isTouchDevice);

  // Page Specific Animations
  initPageAnimations(isTouchDevice);

  // Highlight Active Navigation links
  highlightActiveNavLinks();

  // Desktop Navigation Hover Follower
  initDesktopNavHover(isTouchDevice);

  // Mobile Curtain Menu
  initMobileMenu(isTouchDevice);
});

/* =========================================================================
   CUSTOM CURSOR
   ========================================================================= */
function initCustomCursor(isTouch) {
  if (isTouch) {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.style.display = 'none';
    return;
  }

  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorText = document.getElementById('cursor-text');

  if (!cursorDot || !cursorRing) return;

  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animation Loop
  function updateCursor() {
    // Linear Interpolation (lerp) for smooth lag effect
    dotX += (mouseX - dotX) * 0.25;
    dotY += (mouseY - dotY) * 0.25;
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
    cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  // Show / Hide cursor states on window leave/enter
  document.addEventListener('mouseleave', () => {
    gsap.to([cursorDot, cursorRing], { opacity: 0, duration: 0.3 });
  });
  document.addEventListener('mouseenter', () => {
    gsap.to([cursorDot, cursorRing], { opacity: 1, duration: 0.3 });
  });

  // Attach hover event listeners
  const attachCursorEvents = () => {
    // Normal Interactive Element Hover
    const interactives = document.querySelectorAll('a, button, select, input, textarea, summary, [role="button"], .interactive-hover');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-interactive');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-interactive');
      });
    });

    // Project Element Hover
    const projectTriggers = document.querySelectorAll('.project-hover-trigger, .project-card, .project-row, [data-cursor="project"]');
    projectTriggers.forEach(el => {
      const customText = el.getAttribute('data-cursor-text') || 'VIEW';
      el.addEventListener('mouseenter', () => {
        cursorText.textContent = customText;
        document.body.classList.add('hover-project');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-project');
      });
    });
  };

  attachCursorEvents();
  
  // Re-attach for dynamic page structures
  window.addEventListener('resize', attachCursorEvents);
}

/* =========================================================================
   PRELOADER
   ========================================================================= */
function initPreloader(onCompleteCallback) {
  const preloader = document.getElementById('preloader');
  const percentEl = document.getElementById('loader-percent');
  const words = document.querySelectorAll('.preloader-word');

  if (!preloader || !percentEl || words.length === 0) {
    if (onCompleteCallback) onCompleteCallback();
    return;
  }

  // Pre-load images or wait for window load
  let progress = { value: 0 };
  const wordsList = ["Silence", "Strategy", "Precision", "Alchemy", "Marcy."];

  // Set initial word
  words.forEach((w, idx) => {
    if (idx === 0) {
      gsap.set(w, { opacity: 1, y: '0%' });
    } else {
      gsap.set(w, { opacity: 0, y: '100%' });
    }
  });

  let lastIndex = 0;

  const tl = gsap.timeline({
    onComplete: () => {
      // Exit animation
      gsap.timeline({
        onComplete: () => {
          preloader.style.display = 'none';
          document.body.style.overflow = '';
          if (onCompleteCallback) onCompleteCallback();
        }
      })
      .to(preloader, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut'
      });
    }
  });

  // Animate the counter percentage
  tl.to(progress, {
    value: 100,
    duration: 3.5,
    ease: 'power2.out',
    onUpdate: () => {
      const val = Math.floor(progress.value);
      percentEl.textContent = val < 10 ? '0' + val : val;

      // Cycle word layers
      const step = 100 / wordsList.length;
      const currentIndex = Math.min(Math.floor(val / step), wordsList.length - 1);
      
      if (currentIndex !== lastIndex) {
        // Transition words
        const oldWord = words[lastIndex];
        const newWord = words[currentIndex];
        
        gsap.to(oldWord, { opacity: 0, y: '-100%', duration: 0.4, ease: 'power2.inOut' });
        gsap.to(newWord, { opacity: 1, y: '0%', duration: 0.4, ease: 'power2.out' });
        
        lastIndex = currentIndex;
      }
    }
  });

  // Lock body scroll during preloader
  document.body.style.overflow = 'hidden';
}

/* =========================================================================
   MAGNETIC BUTTONS
   ========================================================================= */
function initMagnetics(isTouch) {
  if (isTouch) return;

  const magnetics = document.querySelectorAll('.cta-button, .filter-btn, .back-to-top, nav a, .logo-magnetic');
  
  magnetics.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const bound = el.getBoundingClientRect();
      const x = e.clientX - bound.left - (bound.width / 2);
      const y = e.clientY - bound.top - (bound.height / 2);
      
      // Pull element towards cursor slightly
      gsap.to(el, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    el.addEventListener('mouseleave', () => {
      // Snap element back to origin with springy ease
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
}

/* =========================================================================
   GLOBAL ENTRANCE
   ========================================================================= */
function startPageEntranceAnimations(isTouch) {
  const tl = gsap.timeline();

  // 1. Gridlines grow down
  if (document.querySelectorAll('.grid-line-v').length > 0) {
    tl.from('.grid-line-v', {
      scaleY: 0,
      duration: 1.4,
      stagger: 0.15,
      ease: 'power4.out'
    });
  }

  // 2. Navigation items slide down
  tl.from('nav', {
    yPercent: -100,
    opacity: 0,
    duration: 1.0,
    ease: 'power3.out'
  }, '-=0.8');

  // 3. Split header lines reveal
  const splitTitles = document.querySelectorAll('.split-line-content');
  if (splitTitles.length > 0) {
    tl.to(splitTitles, {
      y: '0%',
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out'
    }, '-=0.6');
  }

  // 4. Hero Background visual scale-down zoom
  const heroImage = document.querySelector('header img');
  if (heroImage) {
    gsap.fromTo(heroImage, 
      { scale: 1.25 },
      { scale: 1, duration: 2.5, ease: 'power3.out' }
    );
  }
}

/* =========================================================================
   PAGE SPECIFIC MOTIONS
   ========================================================================= */
function initPageAnimations(isTouch) {
  // ─── HOME PAGE (index.html) ───
  initHomeAnimations(isTouch);

  // ─── WORK ARCHIVE (work.html) ───
  initWorkAnimations(isTouch);

  // ─── ABOUT PAGE (about.html) ───
  initAboutAnimations(isTouch);

  // ─── EXPERTISE PAGE (expertise.html) ───
  initExpertiseAnimations(isTouch);

  // ─── PROJECT DETAIL (project.html) ───
  initProjectAnimations(isTouch);
}

/* 🏠 HOME PAGE */
function initHomeAnimations(isTouch) {
  const horizontalSec = document.querySelector('.horizontal-scroll-wrapper');
  
  if (horizontalSec && !isTouch) {
    // 1. Vertical-to-Horizontal Scroll Pinned Showcase
    const slides = document.querySelectorAll('.horizontal-slide');
    
    gsap.to(horizontalSec, {
      x: () => -(horizontalSec.scrollWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        id: 'horizontalScrollTrigger',
        trigger: '.horizontal-scroll-container',
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${horizontalSec.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true
      }
    });

    // Animate inside slides on scroll
    slides.forEach((slide) => {
      const title = slide.querySelector('h3');
      const img = slide.querySelector('img');
      const meta = slide.querySelector('p');

      if (title && img) {
        gsap.from(img, {
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: slide,
            containerAnimation: gsap.getById('horizontalScrollTrigger'), // if horizontal ScrollTrigger is linked
            start: 'left right',
            end: 'right left',
            scrub: true
          }
        });
      }
    });
  }

  // 2. Parallax Philosophy Section
  const parallaxBg = document.querySelector('.parallax-bg');
  if (parallaxBg) {
    gsap.to(parallaxBg, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: '#philosophy',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // 3. Fade up reveals for titles/content
  const reveals = document.querySelectorAll('.reveal-fade-up');
  reveals.forEach(el => {
    gsap.from(el, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/* 📂 WORK ARCHIVE */
function initWorkAnimations(isTouch) {
  const listContainer = document.getElementById('project-list');
  if (!listContainer) return;

  // Stagger entry for project rows
  gsap.from('.project-row', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power4.out',
    scrollTrigger: {
      trigger: listContainer,
      start: 'top 80%'
    }
  });

  if (isTouch) return;

  // Inject dynamic floating hover thumbnail container
  const floatContainer = document.createElement('div');
  floatContainer.className = 'floating-img-container';
  const floatImg = document.createElement('img');
  floatImg.src = '';
  floatImg.alt = 'Preview image';
  floatContainer.appendChild(floatImg);
  document.body.appendChild(floatContainer);

  const rows = document.querySelectorAll('.project-row');
  let currentImgSrc = '';

  rows.forEach(row => {
    // Extract thumbnail source
    const imgEl = row.querySelector('.project-image img');
    if (!imgEl) return;
    const src = imgEl.src;

    row.addEventListener('mouseenter', () => {
      floatImg.src = src;
      floatContainer.classList.add('active');
    });

    row.addEventListener('mousemove', (e) => {
      // Animate floating container to follow mouse
      gsap.to(floatContainer, {
        left: e.clientX + 20,
        top: e.clientY + 20,
        duration: 0.4,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    });

    row.addEventListener('mouseleave', () => {
      floatContainer.classList.remove('active');
    });
  });
}

/* 🏛️ ABOUT PAGE */
function initAboutAnimations(isTouch) {
  // 1. Stagger reveal for team/collective mosaic items
  const masonry = document.querySelector('.masonry-grid');
  if (masonry) {
    gsap.from('.masonry-item', {
      y: 100,
      opacity: 0,
      duration: 1.4,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: masonry,
        start: 'top 80%'
      }
    });
  }

  // 2. Count-up animation for statistics
  const stats = document.querySelectorAll('[data-count]');
  stats.forEach(stat => {
    const endVal = parseInt(stat.getAttribute('data-count'), 10);
    const suffix = stat.getAttribute('data-suffix') || '';
    
    const obj = { value: 0 };
    gsap.to(obj, {
      value: endVal,
      duration: 2.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%'
      },
      onUpdate: function() {
        const val = Math.floor(obj.value);
        const formattedVal = val < 10 ? '0' + val : val;
        stat.textContent = formattedVal + suffix;
      }
    });
  });
}

/* 🧠 EXPERTISE PAGE */
function initExpertiseAnimations(isTouch) {
  // GSAP Smooth Accordion height transition
  const details = document.querySelectorAll('details');
  
  details.forEach(detail => {
    const summary = detail.querySelector('summary');
    const content = detail.querySelector('.service-details');

    if (!summary || !content) return;

    // Set initial state
    if (detail.hasAttribute('open')) {
      gsap.set(content, { height: 'auto', opacity: 1 });
    } else {
      gsap.set(content, { height: 0, opacity: 0 });
    }

    summary.addEventListener('click', (e) => {
      e.preventDefault(); // Control height ourselves

      const isOpen = detail.hasAttribute('open');

      if (!isOpen) {
        // Close other open accordions smoothly
        details.forEach(otherDetail => {
          if (otherDetail !== detail && otherDetail.hasAttribute('open')) {
            const otherContent = otherDetail.querySelector('.service-details');
            if (otherContent) {
              gsap.to(otherContent, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.inOut',
                onComplete: () => {
                  otherDetail.removeAttribute('open');
                }
              });
            }
          }
        });

        // Opening
        detail.setAttribute('open', 'true');
        gsap.fromTo(content, 
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.6, ease: 'power3.out' }
        );
      } else {
        // Closing
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.inOut',
          onComplete: () => {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });

  if (isTouch) return;

  // Float image follow for accordion summary hovers
  const detailsElements = document.querySelectorAll('details');
  if (detailsElements.length === 0) return;

  // Inject or reuse floating-img-container
  let floatContainer = document.querySelector('.floating-img-container');
  let floatImg;
  if (!floatContainer) {
    floatContainer = document.createElement('div');
    floatContainer.className = 'floating-img-container';
    floatImg = document.createElement('img');
    floatImg.src = '';
    floatImg.alt = 'Service Preview';
    floatContainer.appendChild(floatImg);
    document.body.appendChild(floatContainer);
  } else {
    floatImg = floatContainer.querySelector('img');
  }

  detailsElements.forEach(detail => {
    const summary = detail.querySelector('summary');
    const imgEl = detail.querySelector('.service-details img');
    if (!summary || !imgEl) return;

    const src = imgEl.src;

    summary.addEventListener('mouseenter', () => {
      // Only show float container if the accordion is closed
      if (!detail.hasAttribute('open')) {
        floatImg.src = src;
        floatContainer.classList.add('active');
      }
    });

    summary.addEventListener('mousemove', (e) => {
      if (!detail.hasAttribute('open')) {
        gsap.to(floatContainer, {
          left: e.clientX + 20,
          top: e.clientY + 20,
          duration: 0.4,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      } else {
        floatContainer.classList.remove('active');
      }
    });

    summary.addEventListener('mouseleave', () => {
      floatContainer.classList.remove('active');
    });
  });
}

/* 🖼️ PROJECT DETAIL */
function initProjectAnimations(isTouch) {
  const projectHeroImg = document.querySelector('header img');
  if (projectHeroImg) {
    // Zoom/scale down image on page scroll
    gsap.to(projectHeroImg, {
      scale: 1.15,
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: 'header',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }
}

/* 🧭 ACTIVE NAV LINKS HIGHLIGHT */
function highlightActiveNavLinks() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  // Highlight desktop active link
  const desktopLinks = document.querySelectorAll('nav div a');
  desktopLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('text-[#CCAA6E]');
    }
  });

  // Highlight mobile active link
  const mobileLinks = document.querySelectorAll('#mobile-menu a');
  mobileLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('text-[#CCAA6E]');
    }
  });
}

/* =========================================================================
   DESKTOP NAV SLIDING PILL FOLLOWER
   ========================================================================= */
function initDesktopNavHover(isTouch) {
  if (isTouch) return;
  const wrapper = document.querySelector('.desktop-nav-wrapper');
  const pill = document.querySelector('.nav-hover-pill');
  const links = document.querySelectorAll('.desktop-nav-wrapper .nav-link');
  if (!wrapper || !pill || links.length === 0) return;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  let activeLink = null;
  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      activeLink = link;
    }
  });

  // Helper to position hover pill
  function positionPill(target, animate = true) {
    const rect = target.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    const leftVal = rect.left - wrapperRect.left;
    const widthVal = rect.width;

    if (animate) {
      gsap.to(pill, {
        left: leftVal,
        width: widthVal,
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    } else {
      gsap.set(pill, {
        left: leftVal,
        width: widthVal,
        opacity: 1,
        scale: 1
      });
    }
  }

  function hidePill() {
    gsap.to(pill, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: 'power2.inOut',
      overwrite: 'auto'
    });
  }

  // Position immediately on active item (with a small timeout to let rendering settle)
  if (activeLink) {
    setTimeout(() => {
      positionPill(activeLink, false);
    }, 150);
  }

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      positionPill(link, true);
    });
  });

  wrapper.addEventListener('mouseleave', () => {
    if (activeLink) {
      positionPill(activeLink, true);
    } else {
      hidePill();
    }
  });

  // Recalculate on screen resize
  window.addEventListener('resize', () => {
    if (activeLink) {
      positionPill(activeLink, false);
    }
  });
}

/* =========================================================================
   GSAP DOUBLE-CURTAIN MOBILE MENU
   ========================================================================= */
function initMobileMenu(isTouch) {
  const menu = document.getElementById('mobile-menu');
  const curtainAccent = document.querySelector('.menu-curtain-accent');
  const curtainMain = document.querySelector('.menu-curtain-main');
  const links = document.querySelectorAll('.mobile-menu-link');
  const infoBlock = document.querySelector('.mobile-menu-info');
  const footerBlock = document.querySelector('.mobile-menu-footer');
  const line1 = document.querySelector('.menu-line-1');
  const line2 = document.querySelector('.menu-line-2');
  const line3 = document.querySelector('.menu-line-3');

  if (!menu || !curtainAccent || !curtainMain) return;

  // Track toggle state explicitly rather than relying on GSAP reversed status
  let isOpen = false;

  // Set initial states
  menu.classList.remove('hidden');
  gsap.set(menu, { display: 'none', pointerEvents: 'none' });
  gsap.set(curtainAccent, { yPercent: -100 });
  gsap.set(curtainMain, { yPercent: -100 });
  gsap.set(links, { yPercent: 100, skewY: 4 });
  gsap.set(infoBlock, { y: 30, opacity: 0 });
  gsap.set(footerBlock, { opacity: 0 });

  // Create GSAP animation timeline without the zero-duration .set() boundary at start
  const menuTl = gsap.timeline({
    paused: true,
    onReverseComplete: () => {
      // Clean up display and scroll locking when curtain has fully closed
      gsap.set(menu, { display: 'none', pointerEvents: 'none' });
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      if (window.lenisInstance) {
        window.lenisInstance.start();
      }
    }
  });

  menuTl
    // 1. Accent curtain sweep down
    .to(curtainAccent, {
      yPercent: 0,
      duration: 0.75,
      ease: 'power3.inOut'
    })
    // 2. Main curtain sweep slightly staggered
    .to(curtainMain, {
      yPercent: 0,
      duration: 0.75,
      ease: 'power3.inOut'
    }, '-=0.55')
    // 3. Transform hamburger button lines to 'X'
    .to(line1, {
      y: 7,
      rotate: 45,
      duration: 0.35,
      ease: 'power2.out'
    }, '-=0.45')
    .to(line2, {
      scaleX: 0,
      opacity: 0,
      duration: 0.25
    }, '-=0.45')
    .to(line3, {
      y: -7,
      rotate: -45,
      duration: 0.35,
      ease: 'power2.out'
    }, '-=0.45')
    // 4. Stagger-reveal main menu links
    .to(links, {
      yPercent: 0,
      skewY: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: 'power3.out'
    }, '-=0.3')
    // 5. Reveal office details & follow links
    .to(infoBlock, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.4')
    // 6. Fade in bottom details
    .to(footerBlock, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.3');

  // Register global toggle function
  window.toggleMenu = function() {
    const button = document.querySelector('[aria-controls="mobile-menu"]');

    if (!isOpen) {
      // Opening Sequence
      isOpen = true;
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
      if (window.lenisInstance) {
        window.lenisInstance.stop();
      }
      if (button) button.setAttribute('aria-expanded', 'true');
      
      // Ensure display block and pointer events are enabled before running timeline
      gsap.set(menu, { display: 'block', pointerEvents: 'auto' });
      menuTl.play();
    } else {
      // Closing Sequence
      isOpen = false;
      if (button) button.setAttribute('aria-expanded', 'false');
      menuTl.reverse();
    }
  };

  // Prevent back-forward cache visual glitches by resetting menu on cache load
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      isOpen = false;
      gsap.set(menu, { display: 'none', pointerEvents: 'none' });
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
      const button = document.querySelector('[aria-controls="mobile-menu"]');
      if (button) button.setAttribute('aria-expanded', 'false');
      
      // Reset hamburger
      gsap.set(line1, { y: 0, rotate: 0 });
      gsap.set(line2, { scaleX: 1, opacity: 1 });
      gsap.set(line3, { y: 0, rotate: 0 });
      
      // Reset curtains
      gsap.set(curtainAccent, { yPercent: -100 });
      gsap.set(curtainMain, { yPercent: -100 });
      
      // Reset menu internal structures
      gsap.set(links, { yPercent: 100, skewY: 4 });
      gsap.set(infoBlock, { y: 30, opacity: 0 });
      gsap.set(footerBlock, { opacity: 0 });
      
      if (window.lenisInstance) {
        window.lenisInstance.start();
      }
      menuTl.pause(0);
    }
  });
}

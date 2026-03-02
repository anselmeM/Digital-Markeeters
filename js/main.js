document.addEventListener('DOMContentLoaded', function() {
  // Cache selectors
  var navToggler = document.querySelector('.nav__toggler');
  var hamMenu = document.querySelector('.ham-menu');
  var fbBox = document.querySelector('.plus-minus-box--facebook');
  var fbPara = document.querySelector('.accordian-box__para--facebook');
  var googleBox = document.querySelector('.plus-minus-box--google');
  var googlePara = document.querySelector('.accordian-box__para--google');
  var linkedinBox = document.querySelector('.plus-minus-box--linkedin');
  var linkedinPara = document.querySelector('.accordian-box__para--linkedin');
  var menuLinks = document.querySelectorAll('.menu__link');
  var bodyWrapper = document.querySelector('.body-wrapper');

  // Toggle navigation menu
  if (navToggler && hamMenu) {
    navToggler.addEventListener('click', function() {
      this.classList.toggle('active');
      hamMenu.classList.toggle('active');
    });
  }

  function toggleAccordion(box, para) {
    if (box && para) {
      box.addEventListener('click', function() {
        this.classList.toggle('active');
        slideToggle(para, 600); // 'slow' in jQuery is 600ms
      });
    }
  }

  // Toggle accordion boxes
  toggleAccordion(fbBox, fbPara);
  toggleAccordion(googleBox, googlePara);
  toggleAccordion(linkedinBox, linkedinPara);

  // Close navigation menu on link click
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (navToggler) navToggler.classList.remove('active');
      if (hamMenu) hamMenu.classList.remove('active');
    });
  });

  // Close navigation menu on body wrapper click
  if (bodyWrapper) {
    bodyWrapper.addEventListener('click', function() {
      if (navToggler) navToggler.classList.remove('active');
      if (hamMenu) hamMenu.classList.remove('active');
    });
  }
});

// Slide Toggle Implementation
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

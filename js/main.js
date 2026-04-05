// Mobile Menu Toggle Function
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const button = document.querySelector('[aria-controls="mobile-menu"]');
  const lines = document.querySelectorAll('.menu-line-1, .menu-line-2, .menu-line-3');
  
  if (!menu || !button) return;
  
  const isOpen = menu.classList.contains('opacity-100');
  
  if (isOpen) {
    menu.classList.remove('opacity-100', 'pointer-events-auto');
    menu.classList.add('opacity-0', 'pointer-events-none');
    button.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    
    if (lines.length) {
      lines[0].style.transform = 'none';
      lines[1].style.opacity = '1';
      lines[2].style.transform = 'none';
    }
  } else {
    menu.classList.remove('opacity-0', 'pointer-events-none');
    menu.classList.add('opacity-100', 'pointer-events-auto');
    button.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    if (lines.length) {
      lines[0].style.transform = 'translateY(7px) rotate(45deg)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    }
  }
}

// Make toggleMenu available globally
window.toggleMenu = toggleMenu;

// AOS.init({
//   offset: 400,
//   duration: 1000,
// });

// document.addEventListener('DOMContentLoaded', function() {
// Legacy code from original main.js - not used in current site design
//   var navToggler = document.querySelector('.nav__toggler');
//   var hamMenu = document.querySelector('.ham-menu');
//   var fbBox = document.querySelector('.plus-minus-box--facebook');
//   var fbPara = document.querySelector('.accordian-box__para--facebook');
//   var googleBox = document.querySelector('.plus-minus-box--google');
//   var googlePara = document.querySelector('.accordian-box__para--google');
//   var linkedinBox = document.querySelector('.plus-minus-box--linkedin');
//   var linkedinPara = document.querySelector('.accordian-box__para--linkedin');
//   var menuLinks = document.querySelectorAll('.menu__link');
//   var bodyWrapper = document.querySelector('.body-wrapper');

//   if (navToggler && hamMenu) {
//     navToggler.addEventListener('click', function() {
//       this.classList.toggle('active');
//       hamMenu.classList.toggle('active');
//     });
//   }

//   function toggleAccordion(box, para) {
//     if (box && para) {
//       box.addEventListener('click', function() {
//         this.classList.toggle('active');
//         slideToggle(para, 600);
//       });
//     }
//   }

//   toggleAccordion(fbBox, fbPara);
//   toggleAccordion(googleBox, googlePara);
//   toggleAccordion(linkedinBox, linkedinPara);

//   menuLinks.forEach(function(link) {
//     link.addEventListener('click', function() {
//       if (navToggler) navToggler.classList.remove('active');
//       if (hamMenu) hamMenu.classList.remove('active');
//     });
//   });

//   if (bodyWrapper) {
//     bodyWrapper.addEventListener('click', function() {
//       if (navToggler) navToggler.classList.remove('active');
//       if (hamMenu) hamMenu.classList.remove('active');
//     });
//   }
// });

// function slideToggle(target, duration = 400) {
//   if (window.getComputedStyle(target).display === 'none') {
//     return slideDown(target, duration);
//   } else {
//     return slideUp(target, duration);
//   }
// }

// function slideUp(target, duration = 400) {
//   target.style.transitionProperty = 'height, margin, padding';
//   target.style.transitionDuration = duration + 'ms';
//   target.style.boxSizing = 'border-box';
//   target.style.height = target.offsetHeight + 'px';
//   target.offsetHeight;
//   target.style.overflow = 'hidden';
//   target.style.height = 0;
//   target.style.paddingTop = 0;
//   target.style.paddingBottom = 0;
//   target.style.marginTop = 0;
//   target.style.marginBottom = 0;
//   window.setTimeout(function() {
//     target.style.display = 'none';
//     target.style.removeProperty('height');
//     target.style.removeProperty('padding-top');
//     target.style.removeProperty('padding-bottom');
//     target.style.removeProperty('margin-top');
//     target.style.removeProperty('margin-bottom');
//     target.style.removeProperty('overflow');
//     target.style.removeProperty('transition-duration');
//     target.style.removeProperty('transition-property');
//   }, duration);
// }

// function slideDown(target, duration = 400) {
//   target.style.removeProperty('display');
//   var display = window.getComputedStyle(target).display;
//   if (display === 'none') display = 'block';
//   target.style.display = display;
//   var height = target.offsetHeight;
//   target.style.overflow = 'hidden';
//   target.style.height = 0;
//   target.style.paddingTop = 0;
//   target.style.paddingBottom = 0;
//   target.style.marginTop = 0;
//   target.style.marginBottom = 0;
//   target.offsetHeight;
//   target.style.boxSizing = 'border-box';
//   target.style.transitionProperty = 'height, margin, padding';
//   target.style.transitionDuration = duration + 'ms';
//   target.style.height = height + 'px';
//   target.style.removeProperty('padding-top');
//   target.style.removeProperty('padding-bottom');
//   target.style.removeProperty('margin-top');
//   target.style.removeProperty('margin-bottom');
//   window.setTimeout(function() {
//     target.style.removeProperty('height');
//     target.style.removeProperty('overflow');
//     target.style.removeProperty('transition-duration');
//     target.style.removeProperty('transition-property');
//   }, duration);
// }

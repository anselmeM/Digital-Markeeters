AOS.init({
  offset: 400,
  duration: 1000,
});

$(document).ready(function() {
  // Cache selectors
  var $navToggler = $('.nav__toggler');
  var $hamMenu = $('.ham-menu');
  var $fbBox = $('.plus-minus-box--facebook');
  var $fbPara = $('.accordian-box__para--facebook');
  var $googleBox = $('.plus-minus-box--google');
  var $googlePara = $('.accordian-box__para--google');
  var $linkedinBox = $('.plus-minus-box--linkedin');
  var $linkedinPara = $('.accordian-box__para--linkedin');
  var $menuLink = $('.menu__link');
  var $bodyWrapper = $('.body-wrapper');

  // Toggle navigation menu
  $navToggler.click(function() {
    $(this).toggleClass('active');
    $hamMenu.toggleClass('active');
  });

  function toggleAccordion($box, $para) {
    $box.click(function() {
      $(this).toggleClass('active');
      $para.slideToggle('slow');
    });
  }

  // Toggle accordion boxes
  toggleAccordion($fbBox, $fbPara);
  toggleAccordion($googleBox, $googlePara);
  toggleAccordion($linkedinBox, $linkedinPara);

  // Close navigation menu on link click
  $menuLink.click(function() {
    $navToggler.removeClass('active');
    $hamMenu.removeClass('active');
  });

  // Close navigation menu on body wrapper click
  $bodyWrapper.click(function() {
    $navToggler.removeClass('active');
    $hamMenu.removeClass('active');
  });
});

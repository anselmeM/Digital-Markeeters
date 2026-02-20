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

  // Toggle Facebook accordion box
  $fbBox.click(function() {
    $(this).toggleClass('active');
    $fbPara.slideToggle('slow');
  });

  // Toggle Google accordion box
  $googleBox.click(function() {
    $(this).toggleClass('active');
    $googlePara.slideToggle('slow');
  });

  // Toggle LinkedIn accordion box
  $linkedinBox.click(function() {
    $(this).toggleClass('active');
    $linkedinPara.slideToggle('slow');
  });

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

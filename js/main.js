
AOS.init({
	offset: 400, // offset (in px) from the original trigger point
	duration: 1000,
});
// AOS animations

$(document).ready(function() {

	$('.nav__toggler').click(function () {
		$(this).toggleClass('active');
		$('.ham-menu').toggleClass('active');
	});
	$('.plus-minus-box--facebook').click(function () {
		$(this).toggleClass('active');
		$('.accordian-box__para--facebbok').slideToggle( 'slow' );
	});
	$('.plus-minus-box--google').click(function () {
		$(this).toggleClass('active');
		$('.accordian-box__para--google').slideToggle( 'slow' );
	});
	$('.plus-minus-box--linkedin').click(function () {
		$(this).toggleClass('active');
		$('.accordian-box__para--linkedin').slideToggle( 'slow' );
	});
	$('.menu__link').click(function () {
		$('.nav__toggler').removeClass('active');
		$('.ham-menu').removeClass('active');
	});
	$('.body-wrapper').click(function () {
		$('.nav__toggler').removeClass('active');
		$('.ham-menu').removeClass('active');
	});
});

		
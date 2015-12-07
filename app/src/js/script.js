$(document).ready(function(){
	$(".laptop-slicker").slick({
		arrows: false,
		swipe: false,
		touchMove: true,
		dots: true
	});
	$(".suggesting-prices").mouseover(function() {
		if ($(window).width() > 974) {
				$(this).addClass("price-hovered");
		};
	});
	$(".suggesting-prices").mouseleave(function() {
		if ($(window).width() > 974) {
				$(this).removeClass("price-hovered");
		};
	});

	$(".navbut-service, .navbut-about-us, .navbut-pricing-table, .navbut-how-it, .navbut-happy-clients, .navbut-contact-us").click(function(e) {
		e.preventDefault();
		var dest = 0;
		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
			dest = $(document).height() - $(window).height();
		}
		else {
			dest = $(this.hash).offset().top;
		}
		$('html,body').animate({
			scrollTop: dest
		}, 400, 'swing');
	});

});
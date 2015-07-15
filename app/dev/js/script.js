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

	var $scroll = function (lg, md, sm, xs, ss) {
		var windowWidth = $(window).width();
		if (windowWidth > 1182) {
			window.scrollTo(0, lg);
		}
		else if (windowWidth > 974) {
			window.scrollTo(0, md);
		}
		else if (windowWidth > 750) {
			window.scrollTo(0, sm);
		}

		else if (windowWidth > 588) {
			window.scrollTo(0, xs);
		}

		else  {
			window.scrollTo(0, ss);
		};
	};

	$(".navbut-service").click(function(e){
		e.preventDefault();
		$scroll(800, 810, 830, 1050, 1090);
	});

	$(".navbut-about-us").click(function(e){
		e.preventDefault();
		$scroll(1350, 1400, 2500, 2700, 3050);
	});

	$(".navbut-pricing-table").click(function(e){
		e.preventDefault();
		$scroll(2050, 2120, 3200, 3280, 3800);
	});

	$(".navbut-how-it").click(function(e){
		e.preventDefault();
		$scroll(3050, 3140, 5300, 5400, 5900);
	});

	$(".navbut-happy-clients").click(function(e){
		e.preventDefault();
		$scroll(3900, 4000, 7100, 7200, 7700);
	});

	$(".navbut-contact-us").click(function(e){
		e.preventDefault();
		$scroll(4880, 5310, 0, 0, 0);
	});
});
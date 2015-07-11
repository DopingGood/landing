$(document).ready(function(){
	$(".laptop-slicker").slick({
		arrows: false,
		swipe: false,
		touchMove: true,
		dots: true
	});

	$(".suggesting-prices").mouseover(function() {
		$(this).addClass("price-hovered")
	});
	$(".suggesting-prices").mouseleave(function() {
		$(this).removeClass("price-hovered")
	});
});
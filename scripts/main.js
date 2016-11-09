
// slide-menu

$(".menu").click(function() {
	$(".nav-list").fadeToggle(400);
});


// list

$(".nav-list-link").hover(function() {
	$(".nav-second-list").removeClass("hover");
	$(this).next().addClass("hover");
});

$(".nav-second-list").mouseleave(function() {
	$(this).removeClass("hover");
});


// slider

$(".slider-wrap").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

$(".second-slider-wrap").slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 320,
			settings: {
				slidesToShow: 1
			}
		}
	]
});





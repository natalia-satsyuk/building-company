
// slide-menu

$(".menu").click(function() {
	$(".nav-list").fadeToggle(400);
});


// // active-class

// $(".choose-active").click(function() {
// 	 $(this).parents().find(".active").removeClass("active");
// 	 $(this).addClass("active");
// });





// list

$(".hover-list").hover(function() {
	$(".nav-second-list").addClass("hover");
});

console.log("1111");

$(".nav-second-list").mouseout(function() {
	console.log(this);
	$(".nav-second-list").removeClass("hover").addClass("mouse-leave");
});








// slider

$(".slider-wrap").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true
});

$(".second-slider-wrap").slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: true
});


// var slideOptions = {
// 	infinite: true,
// 	slidesToShow: 2,
// 	slidesToScroll: 1,
// 	dots: true
// };

// if ($(document).width() <= 480){
// 	slideOptions.slidesToShow = 1
// }

// var sl = $(".clients-slider-wrap").slick(slideOptions);

// $(window).resize(function() {
// 	if ($(this).width() > 480){
// 		$(".clients-slider-wrap").slick("slickSetOption", "slidesToShow", 2);
// 	} else {
// 		$(".clients-slider-wrap").slick("slickSetOption", "slidesToShow", 1);
// 	}
// });


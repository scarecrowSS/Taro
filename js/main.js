$(document).ready(function () {
	$(".slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrow: true
	});

	$(".slider").on("afterChange", function(e, t, n) {
        $("#cp").text(n + 1)
    });
});

// Soft Scroll

$('a[href^="#"]').bind("click", function(e) {
    var t = $(this);
    $("html, body").stop().animate({
        scrollTop: $(t.attr("href")).offset().top
    }, 1e3),
    e.preventDefault();
});

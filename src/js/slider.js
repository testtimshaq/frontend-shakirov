$(function(){
	// Slider Slick — start
	var mql = window.matchMedia('all and (max-width: 1366px)');
	var mql2 = window.matchMedia('all and (max-width: 1024px)');
	var mql3 = window.matchMedia('all and (max-width: 997px)');

	if (mql3.matches) {
    // размер окна 997px или меньше
    	$('.examples__album').slick({
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
	});
	} else {
	if (mql2.matches) {
    // размер окна 1024px или меньше
    	$('.examples__album').slick({
		slidesToShow: 2,
		infinite: true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: true,
		arrows: false,
	});
	} else {
		if (mql.matches) {
    // размер окна 1366px или меньше
    	$('.examples__album').slick({
		slidesToShow: 2,
		infinite: true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: false,
		arrows: true,
	});
	} else {
    // нет, размер окна более 1366px 
    	$('.examples__album').slick({
		slidesToShow: 3,
		infinite: true,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		dots: false,
		arrows: true,
	});
	}
	}
	}
})
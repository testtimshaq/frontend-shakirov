$(function(){

	// Burst tags — start

	// $(document).ready(function(){
 // 	$('.burst').removeClass('burst');
	// });

	// Burst tags — end

	// Anchors — start
	// $(".my-skills__button_action").on('click', function(){
	// 	window.location.href = "index.html#cost"
	// })
	// $(".about__button_action").on('click', function(){
	// 	window.location.href = "index.html#my-skills"
	// })
	// Anchors — end

	// More information — start
		// Узнать больше
	$(".about__button_action").click(function(){
		$(".inform-container").fadeIn(400)
		$(".inform-container").css({"display": "flex"})

	});

	$('.inform-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
		}
	})

	$('.informer__image').click(function(event){
		$(".inform-container").fadeOut(400);
	})
		// Узнать стоимость
	$(".my-skills__button_action").click(function(){
		$(".inform-container").fadeIn(400)
		$(".inform-container").css({"display": "flex"})

	});

	$('.inform-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
		}
	})

	$('.informer__image').click(function(event){
		$(".inform-container").fadeOut(400);
	})
	// More information — end

	// Menu burger — start
	$('.navigation__img_menu-burger')
	.click(function(){
		$('.header__navigation-mobile').fadeIn().css({'display': 'flex'});
		$('.navigation__img_menu-burger').css({'display': 'none'});
		$('.navigation__img_menu-close').css({'display': 'block'});
		});
	$('.navigation__img_menu-close')
	.click(function(){
		$('.header__navigation-mobile').fadeOut();
		$('.navigation__img_menu-close').css({'display': 'none'});
		$('.navigation__img_menu-burger').css({'display': 'block'});
		});
	// Menu burger — end

	// Call-me button — start
	$(".button_call").click(function(){
		$(".call-container").fadeIn(400)
		$(".call-container").css({"display": "flex"})

	});

	$('.call-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
		}
	})

	$('.caller__image').click(function(event){
		$(".call-container").fadeOut(400);
	})

	// Call-me img
	$("#small-call-me").click(function(){
		$(".call-container").fadeIn(400)
		$(".call-container").css({"display": "flex"})

	});

	$('.call-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
		}
	})
	// Call-me button — end

	// Order-project button — start
	$("#order-project").click(function(){
		$(".order-container").fadeIn(400)
		$(".order-container").css({"display": "flex"})

	});

	$('.order-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400);
		}
	})

	$('.orderer__image').click(function(event){
		$(".order-container").fadeOut(400);
	})
	// Order-project button — end

	// Slider Slick — start
	var mql = window.matchMedia('all and (max-width: 1366px)');
	var mql2 = window.matchMedia('all and (max-width: 1024px)');
	var mql3 = window.matchMedia('all and (max-width: 800px)');

	if (mql3.matches) {
    // размер окна 800px или меньше
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

	
	
	
	// Slider Slick — end

})
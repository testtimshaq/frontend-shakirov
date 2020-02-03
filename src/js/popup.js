$(function(){


	function disableScroll(){
		$('body').css({
				'position': 'fixed',
				'width': '100%',
 				'height': '100%',
 				'overflow': 'hidden'

			})
	};

	function enableScroll(){
		$('body').css({
			'position': 'relative',
 			'overflow': 'auto'
		});
	};

	// More information — start
		// Узнать больше
	$(".about__button_action").click(function(){
		$(".inform-container").fadeIn(400, disableScroll)
		$(".inform-container").css({"display": "flex"})

	});

	$('.inform-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('.informer__image').click(function(event){
		$(".inform-container").fadeOut(400, enableScroll);
	})
		// Узнать стоимость
	$(".my-skills__button_action").click(function(){
		$(".inform-container").fadeIn(400, disableScroll)
		$(".inform-container").css({"display": "flex"})

	});

	$('.inform-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('.informer__image').click(function(event){
		$(".inform-container").fadeOut(400, enableScroll);
	})
	// More information — end

	// Call-me button — start
	$(".button_call").click(function(){
		$(".call-container").fadeIn(400, disableScroll)
		$(".call-container").css({"display": "flex"})

	});

	$('.call-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('.caller__image').click(function(event){
		$(".call-container").fadeOut(400, enableScroll);
	})

	// Call-me img
	$("#small-call-me").click(function(){
		$(".call-container").fadeIn(400, disableScroll)
		$(".call-container").css({"display": "flex"})

	});

	$('.call-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})
	// Call-me button — end

	// Order-project button — start
	$("#order-project").click(function(){
		$(".order-container").fadeIn(400, disableScroll)
		$(".order-container").css({"display": "flex"})

	});

	$('.order-container').click(function(event){
		if(event.target == this) {
			$(this).fadeOut(400, enableScroll);
		}
	})

	$('.orderer__image').click(function(event){
		$(".order-container").fadeOut(400, enableScroll);
	})
	// Order-project button — end
})
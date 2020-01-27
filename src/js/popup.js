$(function(){
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
})
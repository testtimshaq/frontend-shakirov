$(function(){
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

	
})
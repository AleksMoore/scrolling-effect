/* Scrolling Effect */

$(window).scroll(function(){
		if($(window).scrollTop()>200){
			$('.some-cherry').fadeIn(900)
		}else{
			$('.some-cherry').fadeOut(700)
		}
	});

$(window).scroll(function(){
		if($(window).scrollTop()>700){
			$('.full-cherry').fadeIn(900)
		}else{
			$('.full-cherry').fadeOut(700)
		}
	});

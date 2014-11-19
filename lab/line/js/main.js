var item = /* $(window).width() / 2; */ 40;

function random(from,to)
{
    return Math.floor(Math.random()*(to-from+1)+from);
}



/* APP
________________________________ */



for(var i = 0; i < item; i++) {
	
		
	$('body').append('<div class="bar"></div>');
		
	$('.bar').each(function(){
		
		var red = random(150,250);
		var blue = random(150,250);
		var green = random(150,250);
		
		var width = random(10,1007);
		
		$(this).css('background-color','rgb('+red+','+blue+','+green+')');
				
		$('.bar').animate({
			
			'width' : width,
			'margin-left': width
		
		},1000,'swing');
		
		
	
	})
		

}


$(document).live('mousemove',function(e){
	
	
//	$('.bar').stop(false,false).animate({
//			
//			'width': e.clientX,
//			'left': e.clientX / 2,
//		
//		},100);
//	
	
//	$('.bar').css({ WebkitTransform: 'rotate(' + e.clientX / 32 + 'deg)'});  		
	$('.bar').css({'margin-bottom': e.clientY / 100});  		
	
	
//	$('.bar').css({
//		
//		'webkit-transform' : 'rotate('+e+'deg)'
//		'top': e.clientY / 4,
//		'left': e.clientX / 4
//	
//	})

})

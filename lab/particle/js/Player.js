var Player = function(el){
	
	this.el = el;
	
	
	
	$('#particle-wrap').append('<div class="particle" id="'+el+'"></div>');
		
	
	this.animation = function(){
	
		setInterval(function(){
			
			var x = random(0,$('#particle-wrap').width());
			var y = random(0,$('#particle-wrap').height() / 1.5);
			
			$('#'+el).css('backgroundColor','#000')
			
			$('#'+el).animate({
				
				top : y,
				left: x				
			
			},200)
		
		}, 200)
	
	} // animation
	
	
	this.animation();

};







function random(from,to)
{
    return Math.floor(Math.random()*(to-from+1)+from);
}

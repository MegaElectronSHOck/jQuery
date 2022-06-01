$(function () {
			var $container = $('.full-bg');

			$(window).resize(function(){
				var wind = $(this),
						windowWidth = wind.width(),
						windowHeight = wind.height(),
						imageRatio = 864/486,  //배경이미지의 가로세로 비율
						browserRatio = windowWidth/windowHeight;
						
						
				if(imageRatio > browserRatio) {
					$container.css({
						height: '100%',
						width: windowHeight * imageRatio,
						top:0,
						left : (windowWidth - windowHeight * imageRatio)/2
					});
				} else {
					$container.css({
						width: '100%',
						height: windowWidth / imageRatio,
						left:0,
						top : (windowHeight - windowWidth / imageRatio)/2
					});					
					
				}
				
			});
			
			$(window).trigger('resize');
});

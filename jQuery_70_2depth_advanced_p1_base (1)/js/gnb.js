$(function(){

	var menu = $('#gnb > li'),
		wrap = $('#gnbWrap')
		menuHeight = wrap.outerHeight(),
		subMenu = menu.find('.sGnbArea ul li');
		var activeMenu;


	menu.mouseover(function(){
		
		$(this).addClass('on').siblings().removeClass('on');
		var totalHeight = menuHeight + $(this).find('.sGnbArea').outerHeight();
		wrap.stop().animate({height:totalHeight})
	}).mouseout(function(){
		$(this).removeClass('on')
		wrap.stop().animate({height : menuHeight})
		onActive()
	})

	$('.sGnbArea li').mouseover(function(e){
		$('.sGnbArea li').removeClass('on')
		$(this).addClass('on')
	}).mouseout(function(){
		$('.sGnbArea li').removeClass('on');
		onActive()
		
	})

	var pageUrl = location.href;
	
		// pageUrlArray = pageUrl.split('/');
		// pageNum = pageUrlArray[pageUrlArray.length-1];
		// subMenu.each(function(idx, item){
		// 	if($(this).find('a').attr('href') === pageNum){
		// 		$(this).addClass('on')
		// 	}
		// })

		subMenu.each(function(){
			var cm = $(this);
			var subUrl = cm.find('a').attr('href');
			var active = pageUrl.indexOf(subUrl);
			var blankLink = pageUrl.indexOf('#');

			if(active > -1 && blankLink == -1){
				activeMenu = cm;
			}
		})

		function onActive(){
		
			if(activeMenu) activeMenu.trigger('mouseover')
		}
		onActive();
	



});
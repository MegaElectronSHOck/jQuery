$(function(){
	
	/* ---------- 기본 사용 ---------- */

      $('.basic_slider').bxSlider({
		  mode: 'horizontal',
		  speed: 5000
	  });


	/* ---------- 좌우 컨트롤 ---------- */

	$('.control_slider').bxSlider({
		//controls:false
		nextText : '<i class="fas fa-chevron-right"></i>',
		prevText : '<i class="fas fa-chevron-left"></i>',
		pager:false
	});

	$('.img_control_slider').bxSlider({
		//controls:false,
		pager:false,
		prevSelector:'.img_controls .imgcontrols .prev',
		nextSelector:'.img_controls .imgcontrols .next'
	});

	/* ---------- 멀티플 슬라이드 ---------- */
	$('.multiple_slider').bxSlider({
		minSlides:1,
		maxSlides:4,
		moveSlides : 1,
		slideWidth:200,
		slideMargin:30,
		pager:false
	});


	/* ---------- 현재 슬라이드 구분하기 ---------- */

	$('.active_slider').bxSlider({
		onSliderLoad:function(currentIndex){
			$('.active_slider li').eq(currentIndex + 1).addClass('active');
		},
		onSlideAfter:function($slideElement){
			$slideElement.addClass('active').siblings().removeClass('active');
		}
	});



	/* ---------- 슬라이드 옵션 활용 이전,다음, 슬라이드 이동 ---------- */

	

	/* ---------- 자동 슬라이드 ---------- */

	$('.auto_slider').bxSlider({
		auto : true,
		pause : 1000,
		autoHover : true,
		autoDelay : 3000
	})

	/* ---------- 동영상 제어하기 ---------- */
	

	var test_button = '';
	$('.test_button').click(function(){
		$('.video_slides div').eq(1).find('video').get(0).play()
	})
	$('.test_button').trigger('click')

	/* ---------- 탭 연동 ---------- */
	var tabSlide = $('.tab_slide').bxSlider()
	$('.slide_tab').tabs({
		// activate: function(event, ui){
		// 	tabSlide.reloadSlider();
		// }
	});
	
	
});//document ready jquery 
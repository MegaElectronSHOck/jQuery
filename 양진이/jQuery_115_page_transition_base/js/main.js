$(function() {

    var $context = $('body'),
        $navItem = $('#main-nav-menu li'),
        $navUnderline = $('#nav-underline'),
        $navItemMenu = $('#main-nav-menu li a')
        $activeItem = $('#main-nav-menu li.active'),
        animating = false;

    $('#timeofday').html(new Date());

    //$navUnderline 기본위치 지정
    //jquery 요소의 위치 화면상단 화면 왼쪽 offset().top offset().left
    //기준위치에서의 거리 position().left, position.top
    //javascript의 요소의 너비 -> a.offsetWidth
    //jquery -> a.width() a.innerWidth() -> 패딩포함, a.outerWidth() -> 패딩, 보더 포함함, a.outerWidth(true) -> 패딩, 보더, 마진 포함

    $navUnderline.css({
        left: $activeItem.position().left,
        width : $activeItem.outerWidth(),// position사용
    })

    // $navItem에 마우스를 올리면 그 요소의 위치를, 너비를 $navUnderline left, width 값으로 지정
    $navItem.mouseover(function(){
        $navUnderline.css({
            left : $(this).position().left,
            width : $(this).outerWidth()
        })
    })
    .mouseout(function(){

        $navUnderline.css({  
            left: $activeItem.position().left,
            width : $activeItem.outerWidth(),// position사용
        })

    })
    if(history){ // history.pushState가 지원되지 않는 브라우저는 a링크로 이동하게 만든다
    $navItemMenu.click(function(e){
        e.preventDefault();
        var newURL = $(this).attr('href');
        pageChange(newURL, false)
    })
    }
    function pageChange(newURL, usehistoryBtn){
        $activeItem = $('#main-nav-menu a[href="'+newURL+'"]').parent()

        var container = $('<div id="loadingContainer"></div>');
        container.load(newURL, function(){
            var newTitle = container.find('title').text();
            $('title').text(newTitle)
            $('#hero-image').html(container.find('#hero-image > *'));
            $('#main-content').html(container.find('#main-content').contents());
            var pageId = container.find('[id ^= "page"]').attr('id')
            $('[id^="page"]').attr('id', pageId)

            if(!usehistoryBtn){
            window.history.pushState(null, newTitle, newURL)
            }
        })
    }

    $(window).on('popstate', function(){
        var page = location.pathname.split('/').pop()
        pageChange(page, true)
    })
});
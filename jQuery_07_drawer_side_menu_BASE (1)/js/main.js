$(function(){
    var $aside = $('aside'),
    $button = $aside.find('button'),
    $duration = 300;

    // toggleclass, hasClass(조건문에서만 씀)
    $button.click(function(){
        $aside.toggleClass('open');
        if($aside.hasClass('open')){
            $aside.stop().animate({left:'-70px'},$duration, 'easeOutBack' );
            $button.find('img').attr('src','./img/btn_close.png')
        }else{
            $aside.stop().animate({left:'-350px'},$duration, 'easeInBack');
            $button.find('img').attr('src','./img/btn_open.png')
        }

    })
})
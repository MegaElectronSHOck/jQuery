$(function(){
    $('#typo .inner').click(function(){
        // $(this).animate({속성 : 값}, 시간, 이징, 끝나면할일)
        $(this).animate({opacity:0, fontSize:'0px'},1500, 'easeInOutElastic', function(){
            $(this).animate({opacity:1, fontSize:'110px'}, 500)
        })
    })
})
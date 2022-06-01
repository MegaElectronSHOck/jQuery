// $(function(){
//     var $duration = 300,
//         $button = $('#buttons2 button');

//     var $buttons = document.getElementsByTagName('button')
//     $buttons.forEach((v,i)=>{
//         console.log(v)
//     })
// })

$(function(){
    var $duration = 300,
     $button = $('#buttons2 button');
     $button.each(function(idx){
         var newTop = idx*40 -40 + 'px';
         $(this).css({top:newTop})
     })
})
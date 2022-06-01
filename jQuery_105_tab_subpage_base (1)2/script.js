

var tabLink = $('.tab-menu li'),
    subLink = $('.sub-menu li'),
    currentUrl = location.href,
    tabContent = $('#tab-content > div');

tabLink.add(subLink).click(function(e){
    e.preventDefault();
    var targetIdx = $(this).index();
    
    activateTab(targetIdx);
});

subLink.each(function(i){
    var compareUrl = $(this).find('a').attr('href');
    var active = currentUrl.indexOf(compareUrl);
    var blank = currentUrl.indexOf('#');
    console.log(active);
    if(active > -1){
        activateTab(i);
    }
    if(blank == -1){
        activateTab(0);
    }
});


function activateTab(idx){
    tabContent.hide();
    tabLink.find('a').removeClass('active');
    tabLink.eq(idx).find('a').addClass('active');
    tabContent.eq(idx).show();
}
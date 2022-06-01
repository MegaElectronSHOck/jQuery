$(document).ready(function(){
  
  // fullpage customization
  $('#fullpage').fullpage({
    autoScrolling : true,
    scrollHorizontally : true,
    anchors: ['section1','section2','section3','section4','section5'],
    // sectionSelector: '.vertical-scrolling',
    // slideSelector: '.horizontal-scrolling',
    navigation: true,
    sectionsColor : ['#ccc', '#888', 'red', 'blue', 'pink'],
    afterLoad : function(anchorLink, index){
      console.log(anchorLink)
      let header= document.querySelector('header');
      if(index === 2){
        
        header.style.border = '1px solid blue'
      }else{
        header.style.border = 'none'
      }
    }
    // slidesNavigation: true,
    // css3: true,
    // controlArrows: false    
  }); 
  
});
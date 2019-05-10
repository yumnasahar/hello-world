//=======================
    // Horizontal Functions
// ======================

// keep track of the current slide nb
var activeSlideNo = 0;

// number of slides
var lastSlideNo = 0;      

function slide(direction){
    if ($('.holder').is(':animated'))  return;   
    //do not animate it, if an animation is already in motion

    if ( direction > 0 && activeSlideNo == 0 ) return;    
    //do not animate backwards if slide is at beginning

    if ( direction < 0 && activeSlideNo == lastSlideNo) return;    
    //do not animate forward if slide is at the end     

    (direction > 0) ? slide_left(): slide_right();
}


function slide_left(){
    activeSlideNo -= 1;	
     //keep track of the current slide 

    $('.holder').stop().animate(                //animate!
                {'margin-left': "+=" + $('.slide').width()}, 1000);
}


function slide_right(){
    activeSlideNo += 1;	
    //keep track of the current slide
    $('.holder').stop().animate(                //animate!
                {'margin-left': "-=" + $('.slide').width()}, 1000);
}


$(document).ready(function() {
  lastSlideNo = $('.holder').children().length - 1 ;
   $('.abc').on('mousewheel', function(event) {
    slide(event.deltaY);
    }); 
});

//on resize
$(window).resize(function() {
    $('.holder').css({ marginLeft : - 1 * activeSlideNo * $('.slide').width()});                
});


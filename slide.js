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




//=========================
    // Vertical Functions
  //pasting vertical functions
// ========================

//--- DEFINE a reusable animation function: ---//
function scrollThere(targetElement, speed) {
  // initiate an animation to a certain page element:
  $('html, body').stop().animate(
    { scrollTop: targetElement.offset().top }, // move window so target element is at top of window
    speed, // speed in milliseconds
    'swing' // easing
  ); // end animate
} // end scrollThere function definition





//--- START SCROLL EVENTS ---//
// detect a mousewheel event (note: relies on jquery mousewheel plugin):
$(window).on('mousewheel', function (e) {

  // get Y-axis value of each div:
  var div1y = $('#panel1').offset().top,
      div2y = $('#panel2').offset().top,
      div3y = $('#panel3').offset().top,
      div4y = $('#panel4').offset().top,
      div5y = $('#panel5').offset().top,
      div6y = $('#panel6').offset().top,
      // get window's current scroll position:
      lastScrollTop = $(this).scrollTop(),
      // for getting user's scroll direction:
      scrollDirection,
      // for determining the previous and next divs to scroll to, based on lastScrollTop:
      targetUp,
      targetDown,
      // for determining which of targetUp or targetDown to scroll to, based on scrollDirection:
      targetElement;

  // get scroll direction:
  if ( e.deltaY > 0 ) {
    scrollDirection = 'up';
  } else if ( e.deltaY <= 0 ) {
    scrollDirection = 'down';
  } // end if

  // prevent default behavior (page scroll):
  e.preventDefault();

  // condition: determine the previous and next divs to scroll to, based on lastScrollTop:
  if (lastScrollTop === div1y) {
    targetUp = $('#panel1');
    targetDown = $('#panel2');
  } else if (lastScrollTop === div2y) {
    targetUp = $('#panel1');
    targetDown = $('#panel3');
  } else if (lastScrollTop === div3y) {
    targetUp = $('#panel2');
    targetDown = $('#panel3');
  } else if (lastScrollTop < div2y) {
    targetUp = $('#panel1');
    targetDown = $('#panel2');
  } else if (lastScrollTop < div3y) {
    targetUp = $('#panel2');
    targetDown = $('#panel3');
  } // end else if

  // condition: determine which of targetUp or targetDown to scroll to, based on scrollDirection:
  if (scrollDirection === 'down') {
    targetElement = targetDown;
  } else if (scrollDirection === 'up') {
    targetElement = targetUp;
  } // end else if

  // scroll smoothly to the target element:
  scrollThere(targetElement, 400);

}); // end on mousewheel event
//--- END SCROLL EVENTS ---//
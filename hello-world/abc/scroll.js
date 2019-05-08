$(document).ready(function(){

	serviceSectionTop = $('#services-section')[0].clientHeight;
	contactSectionTop = $('#contact-section').offset().top-$('.contact')[0].clientHeight;
	serviceSectionTop = $("#services-section").offset().top;
	contactSectionTotalHeight = $("#contact-section")[0].clientHeight;
	totalLength = $('#services-section')[0].clientHeight-contactSectionTotalHeight;

	$window = $(window); 
 		currentScrollPosition = $window.scrollTop();
		
	  	seriveContactMid =currentScrollPosition - serviceSectionTop;
	  	if ( (currentScrollPosition>serviceSectionTop) && (currentScrollPosition<contactSectionTop) ) {
		     $('.horizontal-scroller').css('margin-left','-'+seriveContactMid+'px');
	  	}

	$window.scroll(function() {
		
		// if($( window ).width() > 992) { 
		// marginValue = $window.scrollTop()-serviceSectionTop;
		//  if($window.scrollTop() < serviceSectionTop) {

		// 	$('.horizontal-scroller').css('margin-left','0px');
		//  }

		//  if( ($window.scrollTop() >= serviceSectionTop) && ($window.scrollTop() <= contactSectionTop) ){
		//      $('.horizontal-scroller').css('margin-left','-'+marginValue+'px');		     		
		//  }
		//  if ($window.scrollTop() > contactSectionTop) {4+
		// 	$('.horizontal-scroller').css('margin-left','-'+totalLength+'px');
		//  }
		// }
	});

});

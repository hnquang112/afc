// JavaScript Document
// Copyright 2014-2015 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

// Main Nav Script
$(function () {
     $(window).scroll(function (event) {
         var st = $(this).scrollTop();
         if (st > 250) {
             $(".afc-header").addClass("small");
			 $(".logo").addClass("small-logo");
			 $(".afc-menu-items").addClass("afc-menu-items-small");
         } else {
             $(".afc-header").removeClass("small");
			 $(".logo").removeClass("small-logo");
			 $(".afc-menu-items").removeClass("afc-menu-items-small");
         }
     });
    $('.nav-icon').on('click', function(){
        $('.afc-menu-items').toggleClass('open');
    });
 });
 
 // Hamburger Time
$(document).ready(function() {
  $('.nav-icon, .subnav-icon').click(function() {
    $(this).toggleClass('active');
  });
});


// Swipe Device

$(document).ready(function() { 

if (is_touch_device()) {
					//Enable swiping...
					$(".carousel-inner").swipe( {
						//Generic swipe handler for all directions
						swipeLeft:function(event, direction, distance, duration, fingerCount) {
							$(this).parent().carousel('next'); 
						},
						swipeRight: function() {
							$(this).parent().carousel('prev'); 
						},
						//Default is 75px, set to 0 for demo so any distance triggers swipe
						threshold:75,
                        excludedElements:"button, input, select, textarea, .noSwipe"
					});
}
				});

function is_touch_device() {  
  try {  
    document.createEvent("TouchEvent");  
    return true;  
  } catch (e) {  
    return false;  
  }  
}
			
	$(function() {
	  $('a[href*=#]:not([role=tab]):not([href*=#getafc]):not([href=#]):not([href=#carousel-afc-home]):not([href=#a]):not([href=#slider-tvguide]):not([href=#carousel-show-photo]):not([href=#a]):not([href=#b]):not([href=#c]):not([href=#d]):not([href*=#panasonic-Carousel]):not([href*=#panasonic-Carousel-mobile]):not([class*=carousel-control])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });

      $('a[href*=#getafc]').click(function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href').replace('#getafc-', '#');
        var target = $('[name=' + anchor.slice(1) + ']');
        if (target.length) {
            var offsetTop = $('nav.afc-menu').height() + 30;
            $('html,body').animate({
              scrollTop: target.offset().top - offsetTop
            }, 1000);
        }
      });
	});

// Dropdown
	 
function DropDown(el) {
	this.dd = el;
	this.initEvents();
}
DropDown.prototype = {
	initEvents : function() {
		var obj = this;

		obj.dd.on('click', function(event){
			$(this).toggleClass('active');
			event.stopPropagation();
		});	
	}
}

$(function() {

	var dd = new DropDown( $('#dd') );
    var dd = new DropDown( $('#ddd') );
	var dd = new DropDown( $('#seasons') );
    var dd = new DropDown( $('#getafc') );

	$(document).click(function() {
		// all dropdowns
		$('.wrapper-dropdown').removeClass('active');
	});

});



// Sticky Banner 
$(window).scroll(function() {

    if ($(this).scrollTop()>50)
     {
        $('.overlay-banner').fadeOut();
     }
    else
     {
      $('.overlay-banner').fadeIn();
     }
 });

 
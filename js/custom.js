(function($) {
    "use strict";
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(50).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    	
	/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});
	
	$("#primarynav .open").click(function() {
		$(this).hide();
		$("#primarynav .close").show().click(function() {
			$(this).hide();
			$("#primarynav .open").show();
		});
		
	});
	
	/* ..............................................
    Fixed Menu
    ................................................. */
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
    Scroll Element Animation 
    ................................................. */
	//setTimeout(startAnimationRight, 200);
	//setTimeout(startAnimationLeft, 200);
	
	// alert($("#website-preview").scrollTop());
		
	/*
	function startAnimationLeft() {
		animationLeft("#mobile-desc");
		animationLeft("#website-preview");
	}	
	
	function startAnimationRight() {
		animationRight("#mobile-preview");
		animationRight("#website-desc");
	}
	
	function animationRight(id) {
		$(id).addClass("w3-animate-right");
		$(id).fadeIn();
	}
	
	function animationLeft(id) {
		$(id).addClass("w3-animate-left");
		$(id).fadeIn();
	}
	*/
	
	
	/* ..............................................
    Scroll To Top
    ................................................. */
	
	$(document).ready(function () {

        var i = 0;
        var txt = 'A Full Stack Web Developer'; /* The text */
        var speed = 150; /* The speed/duration of the effect in milliseconds */

        // Insert output into html 
        setTimeout(typeWriter(), 90000);
        
        // 
        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("typewriter").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        //
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		$('#scroll-to-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});
	
}(jQuery));

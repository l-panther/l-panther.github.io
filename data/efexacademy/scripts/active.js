$(document).ready(function () {

	var page = window.location.href; // Variable
	
	setActive(page); // Call function
	
	function setActive(page) {
		/*
			Set active link button

			If string is in url, set background color

			@page = argument

		*/
		var roller = page.indexOf("roller-banners"),
			banner = page.indexOf("banner-stands"),
			popup = page.indexOf("popup-stands"),
			literature = page.indexOf("literature-stands"),
			exhibition = page.indexOf("modular-stands"),
			lite = page.indexOf("lite-modular"),
			design = page.indexOf("stand-design"),
			print = page.indexOf("large-print"),
		 	event = page.indexOf("event"),
		 	contact = page.indexOf("contact");
		
		if (roller != -1) {
			redStyling(".rollerlink"); 
			
		} else if (banner != -1) {
			redStyling(".bannerlink"); 
			
		} else if (popup != -1) {
			redStyling(".popuplink"); 
			
		} else if (literature != -1) {
			redStyling(".literaturelink"); 
		
		} else if (exhibition != -1) {
			redStyling(".exhibitionlink"); 
		
		} else if (lite != -1) {
			redStyling(".litelink"); 
				
		} else if (design != -1) {
			redStyling(".designlink"); 
		
		} else if (print != -1) {
			redStyling($(".formatlink")); 
		
		} else if (event != -1) {
			redStyling(".eventlink"); 
				
		} else if (contact != -1) {
			redStyling(".contactlink"); 
		
		} else {
			redStyling(".homelink"); 
		}
	}

	// Add background color
	function redStyling(activeClass) {
		$(activeClass).css('background', '#be2230');
		$(activeClass).css('color', '#ffffff');
	}
	
	// Remove background color
	function noStyling(activeClass) {
		activeClass.css('background', 'none');
	}
});

     
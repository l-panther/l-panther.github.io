$(document).ready(function () {
	
	var navbar = document.getElementById("navbar"); /* Get element */
	
	// Call main function
	navigation();
	
	// Hide or show
	function hideShow() {
		if (navbar.className.indexOf("w3-show") === -1) { /* If element class name has index equal to number */
			navbar.className += " w3-show"; /* Class name is string */

		} else { /* Else */
			navbar.className = navbar.className.replace("w3-show", ""); /* Replace element classname with empty string */
		}
	}

	// Navigation
	function navigation() {
		document.getElementById("mini-nav").onclick = hideShow; /* Get element and on click call function */
		$("#navbar a").click(function() {
			navbar.className = navbar.className.replace("w3-show", ""); /* Replace element classname with empty string *//* Get element and on click call function */
		});
		
		/* Set links */
		$(".home-link").css("color", "#ea8f02");
		activeLink(".home-link", ".services-link", ".work-link", ".about-link", ".contact-link");
		activeLink(".services-link", ".home-link", ".work-link", ".about-link",  ".contact-link");
		activeLink(".work-link", ".home-link", ".services-link", ".about-link",  ".contact-link");
		activeLink(".about-link", ".home-link", ".services-link", ".work-link", ".contact-link");
		activeLink(".contact-link", ".home-link", ".services-link", ".work-link", ".about-link");	
	}

	// Active Link
	function activeLink(activelink, link1, link2, link3, link4) {

		// Function will take the id of the links in the navigation bar

		// Mouse over function for link will add class
		$(activelink).mouseenter(function() {
			$(this).addClass("active");
		});

		// Mouse leave function for link will remove class
		$(activelink).mouseleave(function() {
			$(this).removeClass("active");
		});

		// CLick function for link will set color for id
		$(activelink).click(function() {
			$(activelink).css("color", "#ea8f02");	
			$(link1).css("color", "#adadad");
			$(link2).css("color", "#adadad");
			$(link3).css("color", "#adadad");
			$(link4).css("color", "#adadad");

			$("#banner a").hover(function() {
				$(this).css("color", "#f2f2f2");
			});
			$("#introduction-work a").css("color", "#f2f2f2");
		});	
		
	}
});

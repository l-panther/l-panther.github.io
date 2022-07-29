$(document).ready(function() {
	
	/* Show registration form on index page */
	var page = window.location.href, 
		pageReferrer = document.referrer; // Variables
		
		
	if (page == "http://localhost/server/efexacademy/index.php" || page == "http://localhost/server/efexacademy/") { // If page equal to string
		
		if (pageReferrer == "http://localhost/server/efexacademy/roller-banners.php" 	|| 
			pageReferrer == "http://localhost/server/efexacademy/banner-stands.php" || 
			pageReferrer == "http://localhost/server/efexacademy/popup-stands.php" || 
			pageReferrer == "http://localhost/server/efexacademy/literature-stands.php" || 
			pageReferrer == "http://localhost/server/efexacademy/modular-exhibition-stands.php" || 
			pageReferrer == "http://localhost/server/efexacademy/lite-modular.php" || 
			pageReferrer == "http://localhost/server/efexacademy/stand-design.php" || 
			pageReferrer == "http://localhost/server/efexacademy/large-format-print.php" || 
			pageReferrer == "http://localhost/server/efexacademy/event-management.php" || 
			pageReferrer == "http://localhost/server/efexacademy/contact.php") { // If page referrer equal to string
			$("#register-form").hide(); // Hide form
		} else { // Else 
			$("#register-form").show(); // Show form
			$("#main").css("filter", "blur(2px)"); // Blur background
			$("#main-large").css("filter", "blur(2px)"); // Blur background
			
			
			$("form #closeForm").click(function() { // On click of element
				$("#register-form").hide(); // Hide form
				$("#main").css("filter", "blur(0px)"); // Remove blur
				$("#main-large").css("filter", "blur(0px)"); // Remove blur
			});
		}	
	}
	
	$("#closeForm").click(function() { // On click of element
		$("#register-form").hide(); // Hide form
		$("#main").css("filter", "blur(0px)"); // Remove blur
		$("#main-large").css("filter", "blur(0px)"); // Remove blur
	});
	
});
     
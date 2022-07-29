$(document).ready(function() {

	/* Function to hide navigation on small dvices */
	function hideShow() {
		var navbar = $("#navbar"); /* Get element */
		if (navbar.className.indexOf("w3-show") === -1) { /* If element class name has index equal to number */
			navbar.className += " w3-show"; /* Class name is string */
		} else { /* Else */
			navbar.className = navbar.className.replace("w3-show", ""); /* Replace element classname with empty string */
		}
	}

	$("#mini-nav").click(function() {
		hideShow;
	}); /* Get element and on click call function */

});
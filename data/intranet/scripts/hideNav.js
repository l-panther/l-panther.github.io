'use strict';

// Function to hide navigation on small dvices 
function hideShow() {
    var navbar = document.getElementById("navbar"); /* Get element */
	var link = document.getElementById("intranet-link");
    if (navbar.className.indexOf("w3-show") === -1) { /* If element class name has index equal to number */
        navbar.className += " w3-show"; /* Class name is string */
		
    } else { /* Else */
        navbar.className = navbar.className.replace("w3-show", ""); /* Replace element classname with empty string */
    }
}

// Navigation
function navigation() {
    document.getElementById("mini-nav").onclick = hideShow; /* Get element and on click call function */
}

// Scroll
function scroll() {

    var skipLink = $("#toTop");
    window.onscroll = getOffset; // On window scroll call getOffset
    // Get offset
	function getOffset() {
         if (window.pageYOffset <= 100) { // If window offset is less or equal to number 
            skipLink.fadeOut(); // Fade out
		} else { // Else
			 skipLink.fadeIn(); // Fade in
		} 
	} 
}

// Call main functions
function init(){
	navigation();
	scroll();
}

window.onload =  init; /* On load call navigation function */

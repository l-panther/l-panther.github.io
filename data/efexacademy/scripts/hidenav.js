// Open side bar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block"; // Get element and display block
    document.getElementById("showSidebar").style.opacity = "0"; // Set element opacity  
}

// CLose side bar
function w3_close() {
    document.getElementById("mySidebar").style.display = "none"; // Get element and display none  
    document.getElementById("showSidebar").style.display = "block"; // Get element and display block
    document.getElementById("showSidebar").style.opacity = "1"; // Get element and display block  
}

// Stick navaigation on window scroll
function scroll() {
    // Get the navbar
    var navbar = document.getElementById("mySidebar");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	window.onscroll = getOffset;
	
	function getOffset() {
        var skipLink = $("#toTop");
		if (window.pageYOffset >= sticky) { // If window Y offset greater than navigation TOP offset
			navbar.classList.add("sticky") // Add class
		} else { // Else
			navbar.classList.remove("sticky"); } // Removde class
        if (window.pageYOffset <= 200) { // If window Y offset is less or equal to number
            skipLink.fadeOut(); // Fade out
		} else { // Else
			 skipLink.fadeIn(); } // Fade in
	} 
}

// Call functons
function init(){
	w3_close();
	scroll();
}

window.onload =  init; /* On load call init function */
$(document).ready(function() {
    
    var cafeSlides = $(".cafeSlides"),
		slideIndex = 1; // Variables;

    // Next slide function 	
    function nextSlide(n) {
		// Add to index
      	showSlide(slideIndex += n); 
    }

    // Current slide function 
    function currentSlide(n) {
      	showSlide(slideIndex = n);
    }

    // Show slide function 
    function showSlide(n) {

        var i,
            dots = document.getElementsByClassName("slideDemo"); // Variables

        if (n > cafeSlides.length) { // If number greater than slide images
        	slideIndex = 1; } // Set index

        if (n < 1) { // If number less than 1
        	slideIndex = cafeSlides.length; }

        for (i = 0; i < cafeSlides.length; i++) { // For length of slide images
        	cafeSlides[i].style.display = "none"; // Set display
        }

        // Dots
        for (i = 0; i < dots.length; i++) { // For each dot
            dots[i].classList.remove("w3-white"); } // Remove class

        cafeSlides[slideIndex-1].style.display = "block"; // Set display
        dots[slideIndex-1].classList.add("w3-white"); // Set color
    }
	
	document.getElementById("prev").onmousedown = function() { // On click function
        nextSlide(-1); // Previous slide 
    }; 

    document.getElementById("next").onclick = function() { // On click function
        nextSlide(+1); // Next slide
    };    

	showSlide(slideIndex); // Call Show slide function

});

$(document).ready(function() {
    
    var slideIndex = 1,
		hyundaiDoor = $("#hyundai-door .workSlide1"),
        hyundaiDoorDots = $("#hyundai-door .slideDemo1"),
		hyundaiBumper = $("#hyundai-bumper .workSlide2"),
        hyundaiBumperDots = $("#hyundai-bumper .slideDemo2"),
        ivecoCabin = $("#iveco-cabin .workSlide3"),
        ivecoCabinDots = $("#iveco-cabin .slideDemo3")	,
		ivecoBumper = $("#iveco-bumper .workSlide4"),
        ivecoBumperDots = $("#iveco-bumper .slideDemo4"),
        golfBumper = $("#golf-bumper .workSlide5"),
        golfBumperDots = $("#golf-bumper .slideDemo5"); // Variables; // Variables; // Variables;
	
	showSlide(slideIndex, hyundaiDoor, hyundaiDoorDots); // On click function
	showSlide(slideIndex, hyundaiBumper, hyundaiBumperDots); // On click function
	showSlide(slideIndex, ivecoCabin, ivecoCabinDots); // On click function
	showSlide(slideIndex, ivecoBumper, ivecoBumperDots); // On click function
	showSlide(slideIndex, golfBumper, golfBumperDots); // On click function

    // Plus function 	
    function nextSlide(n, workslide, workslideDot) {
		// Add to index
      	showSlide(slideIndex += n, workslide, workslideDot); 
    }

    // Show function 
    function showSlide(n, workslide, workslideDot) {

        var i;
			
        // 1 Hyundai Door
        if (n > workslide.length) { // If number greater than slide images
        	slideIndex = 1 } // Set index

        if (n < 1) { // If number less than 1
        	slideIndex = workslide.length };

        for (i = 0; i < workslide.length; i++) { // For length of slide images
        	workslide[i].style.display = "none"; // Set display
        }
		workslide[slideIndex-1].style.display = "block"; // Set display
        
        // Dots
        for (i = 0; i < workslideDot.length; i++) { // For each dot
            workslideDot[i].classList.remove("active-dot");	 
        	workslideDot[slideIndex-1].classList.add("active-dot"); // Set color  
		} // Remove class
    }
    
	// 1
	$("#work-modal1 .prev").click(function() { // On click function
		nextSlide(-1, hyundaiDoor, hyundaiDoorDots); // Previous slide 
	}); 
	
	$("#work-modal1 .next").click(function() { // On click function
		nextSlide(+1, hyundaiDoor, hyundaiDoorDots); // Next slide
	});

	// 2
	$("#work-modal2 .prev").click(function() { // On click function
		nextSlide(-1, hyundaiBumper, hyundaiBumperDots); // Previous slide 
	}); 

	$("#work-modal2 .next").click(function() { // On click function
		nextSlide(+1, hyundaiBumper, hyundaiBumperDots); // Next slide
	});
	
	// 3
	$("#work-modal3 .prev").click(function() { // On click function
		nextSlide(-1, ivecoCabin, ivecoCabinDots); // Previous slide 
	}); 
	
	$("#work-modal3 .next").click(function() { // On click function
		nextSlide(+1, ivecoCabin, ivecoCabinDots); // Next slide
	});

	// 4
	$("#work-modal4 .prev").click(function() { // On click function
		nextSlide(-1, ivecoBumper, ivecoBumperDots); // Previous slide 
	}); 

	$("#work-modal4 .next").click(function() { // On click function
		nextSlide(+1, ivecoBumper, ivecoBumperDots); // Next slide
	});
	
	// 5
	$("#work-modal5 .prev").click(function() { // On click function
		nextSlide(-1, golfBumper, golfBumperDots); // Previous slide 
	}); 

	$("#work-modal5 .next").click(function() { // On click function
		nextSlide(+1, golfBumper, golfBumperDots); // Next slide
	});

});

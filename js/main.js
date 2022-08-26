(function ($) {
	"use strict";

	let carouselContent = "", cardContent = "", slideCount = "";
	

	// Create Developer instance from class
	const developer = new Developer();


	/* ..........................................
	Navbar Bar
	................................................. */
	$('.navbar-nav .nav-link').on('click', function () {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});

	$("#primarynav .open").click(function () {
		$(this).hide();
		$("#primarynav .close").show().click(function () {
			$(this).hide();
			$("#primarynav .open").show();
		});

	});


/* ..........................................
	Hero
	................................................. */
	setTimeout(moveRight, 50);

    function moveRight() {
        $(".large-img").animate({position: 'relative', left: '50px'});
    }


	/* ..........................................
	Mission
	................................................. */
	$("#webMissionList").html(developer.getWebMission());


	/* ..........................................
	Skills
	................................................. */ 
	const skills = [web];
	let output = "";
	for (let i = 0; i < skills.length; i++) {
		output += skills[i].getSkill();
	}
	$("#skillList").html(output);



	/* ..........................................
	Portfolio
	................................................. */
	
	/* 
	Project List
		1. cafes
		2. car-repair
		3. diabetes
		4. efexacademy
		5. emblem
		6. handyman
		7. intranet
		8. jamaica
		9. london
		10. Childcare
		11. Hair Stylist
		12. Housing 
		13. Cookbook
		14. Photo Gallery
		15. Portfolio
	 */

	// Array of projects
	const projects = [cafes, carrepair, diabetes, efexacademy, emblem, parees];

	// For length of result, output content
	for (var i = 0; i < projects.length; i++) {
		cardContent += projects[i].showCard(i);			
		carouselContent += projects[i].showCarousel(i);			
		slideCount += projects[i].countProject(i);			
	}

	// Insert output into html 
	$("#carouselList").html(carouselContent);
	$("#cardList").html(cardContent);
	$("#slideCount").html(slideCount);


	// Insert output into html 
	function getModalContent(elemId1, elemId2, method) {
		$(elemId1).click(function () {
			$(elemId2).html(method);
		});
	}

	function clearModalContent(elemId) {
		$(".modal button").click(function () {
			$(elemId).html("");
		});
	}

}(jQuery));

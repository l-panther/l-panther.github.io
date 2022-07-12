(function ($) {
	"use strict";

	let carouselContent = "", slideCount = "";
	

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
	Mission
	................................................. */
	$("#webMissionList").html(developer.getWebMission());

	
	/* ..........................................
	Portfolio
	................................................. */
	
	/* 
	Project List
		1. Cafe
		2. Car-repair
		3. Diabetes
		4. Efexacademy
		5. Emblem
		6. Handyman
		7. Intranet
		8. Jamaica
		9. London
		10. Childcare
		11. Hair Stylist
		12. Housing 
		13. Cookbook
		14. Photo Gallery
		15. Portfolio
	 */

	// Array of projects
	const projects = [carrepair, diabetes, efexacademy, emblem, jamaica, london, parees];

	// For length of result, output content
	for (var i = 0; i < projects.length; i++) {
		carouselContent += projects[i].showCarousel(i);
		slideCount += projects[i].countProject();
	}

	// Insert output into html 
	$("#carouselList").html(carouselContent);
	$("#slideCount").html(slideCount);


	/* ..........................................
	Skills
	................................................. */ 
	const skills = [web, technician, modelling, decorator];
	let output = "";
	for (let i = 0; i < skills.length; i++) {
		output += skills[i].getSkill();
	}
	$("#skillList").html(output);

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

	// Skills
	getModalContent("#web-modal", "#web-details", web.getDetails());
	getModalContent("#technician-modal", "#technician-details", technician.getDetails());
	getModalContent("#modelling-modal", "#modelling-details", modelling.getDetails());
	getModalContent("#decorator-modal", "#decorator-details", decorator.getDetails());

	
	// Projects
	getModalContent("#carrepair-modal", "#carrepair-details", carrepair.getDetails());
	getModalContent("#diabetes-modal", "#diabetes-details", diabetes.getDetails());
	getModalContent("#efexacademy-modal", "#efexacademy-details", efexacademy.getDetails());	
	getModalContent("#emblem-modal", "#emblem-details", emblem.getDetails());	
	getModalContent("#london-modal", "#london-details", london.getDetails());	

	// Clear Skill Modal
	clearModalContent("#web-details");
	clearModalContent("#technician-details");
	clearModalContent("#modelling-details");
	clearModalContent("#decorator-details");
		
	// Clear  Project Modal
	clearModalContent("#cafes-details");
	clearModalContent("#carrepair-details");
	clearModalContent("#diabetes-details");
	clearModalContent("#efexacademy-details");
	clearModalContent("#emblem-details");
	clearModalContent("#london-details");
		

}(jQuery));

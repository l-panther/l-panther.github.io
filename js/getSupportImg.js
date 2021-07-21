$(document).ready(function () {

	/*
		constructor for class: id, title, image, features, description) 
	    
	*/

	let supportList = "",

		// Project object
		support1 = new Support(
			1,
			"Hardware",
			"hardware",
			[
				{ "name": "New Build" },
				{ "name": "System Upgrade" }
			],

			"A website guide for cafes."
		),

		support2 = new Support(
			2,
			"Software",
			"software",
			[
				{ "name": "Installation" },
				{ "name": "Configuration" }
			],
			"A website for company services."
		),

		support3 = new Support(
			3,
			"Networking",
			"networking",
			[
				{ "name": "File Sharing" },
				{ "name": "Centralisation" }
			],
			"A web application for diabetes."
		),

		// Array of projects
		support = [support1, support2, support3];

	// For length of result, output content
	for (var i = 0; i < support.length; i++) {
		//carouselContent += support[i].showCarousel(i);
		//supportCount += support[i].showCount(i);
		supportList += support[i].showList();

	}

	// Insert output into html 
	//$("#supportList").html(carouselContent);
	//$("#supportCount").html(supportCount);
	//$("#supportCard").html(supportCard);
	$("#supportContent").html(supportList);
});



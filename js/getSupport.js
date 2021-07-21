$(document).ready(function () {

	/*
		constructor for class: id, title, image, features, description) 
	    
	*/

	let supportList = "",
		supportImgList = "",

		// Project object
		support1 = new Support(
			1,
			"Hardware",
			"hardware",
			[
				{ "name": "New Build" },
				{ "name": "Component" },
				{ "name": "Disk Management" }
			]
		),

		support2 = new Support(
			2,
			"Software",
			"software",
			[
				{ "name": "Operating System" },
				{ "name": "System Drivers" },
				{ "name": "Applications" }
			]
		),

		support3 = new Support(
			3,
			"Networking",
			"networking",
			[
				{ "name": "File Sharing" },
				{ "name": "Centralisation" },
				{ "name": "Security" }
			]
		),

		// Array of projects
		support = [support1, support2, support3];

	// For length of result, output content
	for (var i = 0; i < support.length; i++) {
		//carouselContent += support[i].showCarousel(i);
		//supportCount += support[i].showCount(i);
		supportList += support[i].showList();
		supportImgList += support[i].showCarouselList(i);

	}

	// Insert output into html 
	//$("#supportList").html(carouselContent);
	//$("#supportCount").html(supportCount);
	//$("#supportCard").html(supportCard);
	$("#supportContent").html(supportList);
	$("#supportImgList").html(supportImgList);
});



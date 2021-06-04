$(document).ready(function() {
	
    /*
        constructor for class: id, title, type, image, features, technologies, reports, description, git) 
        
    */
    
	let carouselContent = "",
		slideCount = "",
        
        // Project object
		project1 = new Project(
			1,
			"Cafes in London ",
			"A website",
			"cafes",
            [ 
				{"name":"Carousel"},
				{"name":"Google Map"}
			],
			[ 
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"bootstrap"},
				{"name":"json"},
				{"name":"krita"}
			],
			"A website guide for cafes.",
			"cafes",
			"cafes"
		),	
        
        project2 = new Project(
			2,
			"Car Repair",
			"A website",
			"carrepair",
			[ 
				{"name":"Modal"},
				{"name":"Slideshow"}
			],
            [ 
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"bootstrap"},
				{"name":"json"},
				{"name":"krita"}
			],
            "A website for company services.",
			"car-repair",
            "car-repair"
		),	
		
        project3 = new Project(
			3,
			"BMI Test",
			"A web application",
			"diabetes",
			[ 
				{"name":"BMI Test"},
				{"name":"Contact form"}
			],
            [ 
				{"name":"php"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"bootstrap"},
				{"name":"krita"}
			],
			"A web application for diabetes.",
			"diabetes",
			"diabetes"
		),	
        
        project4 = new Project(
			4,
			"Efexacademy",
			"A website",
			"efexacademy",
			[ 
				{"name":"Carousel"},
				{"name":"Google Map"}
			],
			[ 
				{"name":"php"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"w3"},
				{"name":"maya"},
				{"name":"krita"}
			],
			"A website for company services.",
			"efexacademy",
			"efexacademy"
		),
        
		project5 = new Project(
			5,
			"Emblem Books",
			"A website",
			"emblem",
			[ 
				{"name":"Feedback Form"},
				{"name":"Device Integration"}
			],
			[ 
				{"name":"php"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"w3"},
				{"name":"maya"},
				{"name":"krita"}
			],
			"A website for company services.",
			"emblem",
			"emblem"
		),
        
		project6 = new Project(
			6,
			"Handy Man",
			"A website",
			"handyman",
			[ 
				{"name":"Carousel"},
				{"name":"Google Map"}
			],
			[ 
				{"name":"php"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"w3"},
				{"name":"maya"},
				{"name":"krita"}
			],
			"A website for company services.",
			"handyman",
			"handyman"
		),
		
		project7 = new Project(
			7,
			"Intranet",
			"A web application",
			"intranet",
			[ 
				{"name":"Login & Register Form "},
				{"name":"Sessions"}
			],
			[ 
				{"name":"php"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"w3"},
				{"name":"krita"}
			],
			"A intranet for company services.",
            "intranet",
			"intranet"
		),
        
        project8 = new Project(	
            8,
			"Jamaica Travel",
			"A website",
			"jamaica",
			[ 
				{"name":"Modal"},
				{"name":"Google Map"}
			],
			[ 
				{"name":"php"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"w3"},
				{"name":"krita"}

			],
			"A website guide for Jamaica.",
			"jamaica/index.php",
			"jamaica-travel"
		),
		
        project9 = new Project(	
            9,
			"London Guide",
			"A website",
			"london",
			[ 
				{"name":"Modal"},
				{"name":"Google Map"}
			],
			[ 
				{"name":"php"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"w3"},
				{"name":"krita"}

			],
			"A website guide for London.",
			"london/index.php",
			"london-guide"
		),
 
        project10 = new Project(	
            10,
			"Child Care",
			"A website",
			"pacca",
			[ 
				{"name":"Login/Register form"},
				{"name":"Google Map"}
			],
			[ 
				{"name":"laravel"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"bootstrap"},
				{"name":"mysql"},
				{"name":"krita"},

			],
			"A website for child care.",
			"london/index.php",
			"pacca"
		),
			
		project11 = new Project(
			11,
			"Hair Stylist",
			"A website",
			"parees",
			[ 
				{"name":"Carousel"},
				{"name":"Device Integration"}
			],
			[ 
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"bootstrap"},
				{"name":"krita"},

			],
			"A website for company services.",
			"parees",
			"parees"
		),
        
        project12 = new Project(
			12,
			"Housing",
			"A mobile application",
			"housing",
			[ 
				{"name":"Login / Register form"},
				{"name":"Local Storage"}
			],
			[ 
				{"name":"laravel"},
				{"name":"jqm"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"w3"},
				{"name":"json"},
				{"name":"krita"}

			],
			"A mobile app for housing.",
			"housing",
			"housing"
		),
			        
        project13 = new Project(
			13,
			"Cookbook",
			"A mobile application",
			"cookbook",
			[ 
				{"name":"Hybrid Application"},
				{"name":"Search Filter"}
			],
			[ 
				{"name":"jqm"},
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"w3"},
				{"name":"json"},
				{"name":"krita"}

			],
			"A mobile app for cooking.",
			"cookbook",
			"cookbook"
		),		   
        
        project14 = new Project(
			14,
			"Photo Gallery",
			"A web ppplication",
			"parees",
			[ 
				{"name":"Carousel"},
				{"name":"Device Integration"}
			],
			[ 
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"bootstrap"},
				{"name":"krita"},

			],
			"A web application for photos.",
			"parees",
			"parees"
		),
	
		project15 = new Project(
			15,
			"Portfolio",
			"A website",
			"portfolio",
			[ 
				{"name":"Carousel"},
				{"name":"External Links"}
			],
			[ 
				{"name":"html5"},
				{"name":"css3"},
				{"name":"javascript"},
				{"name":"bootstrap"},
				{"name":"krita"},

			],
			"A website for my projects.",
			"portfolio",
			"portfolio"
		);
		
        // Array of projects
        projects = [project1, project2, project3, project4, project5, project7, project8, project9, project10, project11, project12, project13, project15];
	
	// For length of result, output content
	for (var i = 0; i < projects.length; i++) {
        carouselContent += projects[i].showCarousel(i);
        slideCount += projects[i].showCount(i);
	}

    // Insert output into html 
	$("#projectList").html(carouselContent); 
	$("#slideCount").html(slideCount); 
});



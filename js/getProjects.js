$(document).ready(function() {
	
    /*
        constructor for class: id, title, type, image, features, technologies, reports, description, git) 
        
    */
    
	let carouselContent = "",
		slideCount = "",
		report = "",
        
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
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"JSON"},
				{"name":"Krita"}
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
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"JSON"},
				{"name":"Krita"}
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
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"Krita"}
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
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Maya"},
				{"name":"Krita"}
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
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Maya"},
				{"name":"Krita"}
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
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Maya"},
				{"name":"Krita"}
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
				{"name":"Login/Register"},
				{"name":"Sessions"}
			],
			[ 
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Krita"}
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
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Krita"}

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
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Krita"}

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
				{"name":"Laravel"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"mysql"},
				{"name":"Krita"},

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
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"Krita"},

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
				{"name":"Laravel"},
				{"name":"jQuery Mobile"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"JavaScript"},
				{"name":"JSON"},
				{"name":"Krita"}

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
				{"name":"jQuery Mobile"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"JavaScript"},
				{"name":"JSON"},
				{"name":"Krita"}

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
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"Krita"},

			],
			"A web application for photos.",
			"parees",
			"parees"
		);
		
        // Array of projects
        projects = [project1, project2, project3, project4, project5, project7, project8, project9, project11, project12, project13];
     let g = $("#typewriter").val();
	
	// For length of result, output content
	for (var i = 0; i < projects.length; i++) {
        carouselContent += projects[i].showCarousel(i);
        
	}

    // Insert output into html 
	$("#projectList").html(carouselContent); 
	$("#slideCount").html(slideCount); 
});



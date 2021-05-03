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
			"A Website",
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
			"cafe",
			"cafes"
		),	
        
        project2 = new Project(
			2,
			"Car Repair",
			"A Website",
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
			"Diabetes",
			"A Web Application",
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
			"A Website",
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
			"Intranet",
			"A Website Application",
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
				
		project6 = new Project(	
            6,
			"London Guide",
			"A Website",
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
		
		/*{
			"id": 7,
			"name": "Out of School Club",
			"type": "A Website",
			"image": "pacca",
			"features":[ 
				{"name":"Login/Register form"},
				{"name":"Google Map"}
			],
			"technologies":[ 
				{"name":"Laravel"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"mysql"},
				{"name":"Krita"},

			],
			"description":"A website for child care.",
			"url":"pacca",
			"git":"pacca-childcare"
		},
		*/
			
		project7 = new Project(
			7,
			"Parees Taylor",
			"A Website",
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
			
			
		/*{
			"id": 9,
			"name": "Housing",
			"type": "A Mobile Application",
			"image": "housing",
			"features":[ 
				{"name":"Login / Register form"},
				{"name":"Local Storage"}
			],
			"technologies":[ 
				{"name":"Laravel"},
				{"name":"jQuery Mobile"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"JavaScript"},
				{"name":"JSON"},
				{"name":"Krita"}

			],
			"description":"A mobile app for housing.",
			"url":"housing",
			"git":"housing"
		}*/
		
        // Array of projects
        projects = [project1, project2, project3, project4, project5, project6, project7];
     let g = $("#typewriter").val();
	
	// For length of result, output content
	for (var i = 0; i < projects.length; i++) {
        carouselContent += projects[i].showCarousel(i);
        
	}

    // Insert output into html 
	$("#projectList").html(carouselContent); 
	$("#slideCount").html(slideCount); 
});



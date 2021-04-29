$(document).ready(function() {
	
	let output = "",
		output2 = "",
		dots = "<span class='w3-badge dots w3-border'></span>",
		projects = [
			
		{
			"id": 1,
			"name": "Cafes in London ",
			"type": "A Website",
			"image": "cafe",
			"features":[ 
				{"name":"Carousel"},
				{"name":"Google Map"}
			],
			"technologies":[ 
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"JSON"},
				{"name":"Krita"}
			],
			"description":"A website guide for cafes.",
			"url":"cafe",
			"git":"cafes"
		},	
			
		{
			"id": 2,
			"name": "Car Repair",
			"type": "A Website",
			"image": "carrepair",
			"features":[ 
				{"name":"Modal"},
				{"name":"Slideshow"}
			],
			"technologies":[ 
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"JSON"},
				{"name":"Krita"}
			],
			"description":"A website for company services.",
			"url":"car-repair",
			"git":"car-repair"
		},	
			
		{
			"id": 3,
			"name": "Diabetes",
			"type": "A Web Application",
			"image": "diabetes",
			"features":[ 
				{"name":"BMI Test"},
				{"name":"Contact form"}
			],
			"technologies":[ 
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"Krita"}
			],
			"description":"A web application for diabetes.",
			"url":"diabetes",
			"git":"diabetes"
		},	
			
		{
			"id": 4,
			"name": "Efexacademy",
			"type": "A Website",
			"image": "efexacademy",
			"features":[ 
				{"name":"Carousel"},
				{"name":"Google Map"}
			],
			"technologies":[ 
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Maya"},
				{"name":"Krita"}
			],
			"description":"A website for company services.",
			"url":"efexacademy",
			"git":"efexacademy"
		},
		
		{
			"id": 5,
			"name": "Intranet",
			"type": "A Website Application",
			"image": "intranet",
			"features":[ 
				{"name":"Login/Register"},
				{"name":"Sessions"}
			],
			"technologies":[ 
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Krita"}
			],
			"description":"A intranet for company services.",
			"url":"intranet",
			"git":"intranet"
		},
				
			
		{
			"id": 6,
			"name": "London Guide",
			"type": "A Website",
			"image": "london",
			"features":[ 
				{"name":"Modal"},
				{"name":"Google Map"}
			],
			"technologies":[ 
				{"name":"PHP"},
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"w3"},
				{"name":"JavaScript"},
				{"name":"Krita"}

			],
			"description":"A website guide for London.",
			"url":"london/index.php",
			"git":"london-guide"
		},
		
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
			
		{
			"id": 7,
			"name": "Parees Taylor",
			"type": "A Website",
			"image": "parees",
			"features":[ 
				{"name":"Carousel"},
				{"name":"Device Integration"}
			],
			"technologies":[ 
				{"name":"HTML5"},
				{"name":"CSS3"},
				{"name":"bootstrap"},
				{"name":"JavaScript"},
				{"name":"Krita"},

			],
			"description":"A website for company services.",
			"url":"parees/index.html",
			"git":"parees"
		}
			
			
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
			
	];
	
	
	// For length of result, output content
	for (var i = 0; i < projects.length; i++) {

		if(projects[i].id == 1) { 
			output += "<div class='carousel-item active'> <!-- Carousel item -->"; 
			output2 += "<li data-target='#projectCarousel' data-slide-to='" + i + "' class='active'>" + i + "</li>"; 
		} else if (projects[i].id != 1) {
			output += "<div class='carousel-item'> <!-- Carousel item -->";
			output2 += "<li data-target='#projectCarousel' data-slide-to='" + i + "'></li>"; 
		}

		// Output
		output += "<h2 class='theme-color-bg text-center'>" + projects[i].name + "</h2>";
		output += "<div class='row w3-container'> <!-- Row -->";
		output += "<div class='col-lg-5 col-md-5 col-sm-12 w3-center'> <!-- Column -->";
		output += "<img class='img-carousel' src='images/projects/" + projects[i].image + ".png' alt='Website " + projects[i].id + " screenshot' />";
		output += "</div> <!-- End column-->";
		output += "<div class='col-lg-7 col-md-7 col-sm-12'> <!-- Column -->";
		
		// Description
		output += "<h3><b>Description</b></h3>";
		output += "<div class='project-desc'>";
		output += "<p>" + projects[i].description + "</p>";
		output += "</div>";
		
		// Features
		output += "<h3 class='w3-margin-top'><b>Features</b></h3>";
		output += "<ul>";
		
		for (let j = 0; j < projects[i].features.length; j++) {
			output += "<li><i class='fa fa-check w3-margin-right'></i>" + projects[i].features[j].name + "</li>";
		
		}
		output += "</ul>";
		
		// Technologies
		output += "<h3 class='w3-margin-top'><b>Technologies</b></h3>";
		output += "<ul class='tech-list'>";
		
		for (let k = 0; k < projects[i].technologies.length; k++) {
			output += "<li><img src='images/technologies/" + projects[i].technologies[k].name + ".png' alt='' title='" + projects[i].technologies[k].name + "' class='tech-icon'></li>";
		
		}
		output += "</ul>";
		output += "</div> <!-- End column -->";
		/*
		output += "<div class='col-lg-12'> <!-- Column -->";
		output += "<h3 class='w3-margin-top'>Features</h3>";
		output += "<ul class='w3-text-grey'>";
		
		for (let k = 0; k < projects[i].features.length; k++) {
			output += "<li><i class='fa fa-check w3-margin-right'></i>" + projects[i].features[k].name + "</li>";
		
		}
		output += "</ul>";
		output += "</div> <!-- End column -->";
		*/
	
		output += "</div> <!-- End row -->";
		
		/* Mockup button
		output += "<div class='w3-row w3-center buttons'> <!-- Row -->";
		output += "<div class='w3-col s4 m4 l4 button'> <!-- Column -->";
		output += "<div class='w3-padding' title='View website in new tab'><i class='fa fa-globe'></i><a href='data/projects/" + projects[i].url + "' target='_blank'><span class='w3-hide-small'>VIEW</span> WEBSITE</a></div>";
		output += "</div> <!-- End column -->";
		*/
		
		// Website button
		output += "<div class='w3-row w3-center buttons'> <!-- Row -->";
		
		output += "<div class='w3-col s6 m6 l6 button'> <!-- Column -->";
		output += "<div class='w3-padding' title='View website in new tab'><i class='fa fa-globe'></i><a href='data/projects/" + projects[i].url + "' target='_blank'><span class='w3-hide-small'>VIEW</span> WEBSITE</a></div>";
		output += "</div> <!-- End column -->";		
		
		
		// Code button
		output += "<div class='w3-col s6 m6 l6 button'> <!-- Column -->";
		output += "<div class='w3-padding' title='View source code in Github'><i class='fa fa-list'></i><a href='https://github.com/l-panther/" + projects[i].git + "' target='_blank'><span class='w3-hide-small'>VIEW</span> CODE</a></div>";
		output += "</div> <!-- End column -->";
		output += "</div <!-- End row -->";
		output += "</div <!-- End row -->";
		
	}
	               
	// $("#website-dots").html(dots.repeat(projects.length)); // Insert content to element and refresh listview
	$("#projectList").html(output); // Insert output into html 
	$("#slideCount").html(output2); // Insert output into html 
	
	
});


                                                                                                                                                                                                                                                                  
/*
	constructor for class: id, title, image, statement short, statement long, skills) 
	
*/


/* 
Skill List
	1. Web Developer
	2. PC Technician
	3. Art
	4. 3D Modeling
	5. Paint & Decorator
	*/


// Project object
const web = new Skillset(
	1,
	"User Interface <span class='theme-txt'>Design</span>",
	"web",
	"Directional arrows point to a notated wireframe of a web page showing placement of navigation and other elements. Directional arrows point from wireframe to a laptop with icons for HTML, CSS JavaScript, PHP, jSON and Krita. Direction arrow then point to a mockup design of the wire frome with notation for clickable image and other functionality.",
	"Plan, design, develop and test web systems using the latest web and server technologies</p>",
	`As a Web Developer, I plan, design, develop and test web systems using web and server technologies such as HTML5, CSS3 JavaScript and PHP, as well as frameworks and libraries Django and React. Web systems are built to meet client requirements which involes both front end development and back-end development. Using basic HTML and CSS according to web standards for Front-end development and frameworks and databases for back-end development.</p>

	<p class="pb-3">To further personalise and improve overall aesthectics of the front-end development, I combine my skills as a <span id='artist-modal' data-toggle='modal' data-target='#detailModal' class='modal-link'>2D/3D Artist</span> with my aptitude for <span id='technician-modal' data-toggle='modal' data-target='#detailModal' class='modal-link link-blue'>computer software</span> to create and manipulate digital images. 	
	`,
	[
		{
			"id": 1,
			"title": "Plan",
			"image": "plan",
			"description": ["Gather information for system functionality and non-functional requirements"],
		},
		{
			"id": 2,
			"title": "Design",
			"image": "design",
			"description": ["Define entities and their relationships, as well as logic, structure and presentation of system"],
		},
		{
			"id": 3,
			"title": "Develop",
			"image": "develop",
			"description": ["Build system using latest web technologies and frameworks"],
		},
		{
			"id": 4,
			"title": "Test",
			"image": "test",
			"description": ["Test system for bugs and errors in functionality and presentation"],
		},
	]
),

technician = new Skillset(
	2,
	"PC Technician",
	"technician",
	"A computer processing unit (CPU)",
	"Installation, configuration and maintainence of hardware and software for computer systems",
	"As a PC Technician, I build desktops, replair laptops and maintain computer systems, running Microsoft and Linux operating systems. ",
	[	{
			"id": 1,
			"title": "Hardware",
			"image": "hardware",
			"description": ["Installation of internal components, such as motherboard, CPU, memory modules and hard drive"],
		},
		{
			"id": 2,
			"title": "Software",
			"image": "software",
			"description": [" Operating system installation and configuration for Microsoft Windows 7, 10, Server 2016, Ubuntu 19.04 and Mint 21.04, including supported applications"]
			,
		},
		{
			"id": 3,
			"title": "Networking",
			"image": "network",
			"description": ["Setup of routers, printers and other peripheral  devices for business and home networks"],
		},
	]
),

art = new Skillset(
	3,
	"2D/3D Artist",
	"modelling",
	"A cube, sphere and pyramid",
	"Sketch, detail, model, texture and lighting  of various 2D and 3D ojbects",
	"As an Artist, I use computer software <i>Krita</i> and <i>Blender</i> to create and manipulate logos, icons other images for the user interface.",    
	[
		{
			"id": 1,
			"title": "Illustration",
			"image": "sketch",
			"image_description": "A pencil with some drawn lines",
			"description": ["Sktetch interpretation or visual explanation before adding detail"],
		},
		{
			"id": 2,
			"title": "Colouring",
			"image": "colour",
			"image_description": "A colour palete and paint brush",
			"description": ["Add base colour, shading and highlights"],
		},
		{
			"id": 3,
			"title": "Modeling / Scupting",
			"image": "3d",
			"image_description": "A three-dimensional cude",
			"description": ["Create complex geometry by combining primitive objects and manipulating verticles, edges and faces"],
		},
		{
			"id": 4,
			"title": "Lighting",
			"image": "lighting",
			"image_description": "A spotlight",
			"description": ["Add lighting to illuminate scene and cast shadows to replicate real-world"],
		},
		{
			"id": 5,
			"title": "Materials",
			"image": "texture",
			"image_description": "3 tier layer of possible materials",
			"description": ["Apply diffuse colour, normal map, bump map and other map types for desired level of realism"],
		},

	]
),

decorator = new Skillset(
	4,
	"Painter &amp; Decorator",
	"decorator",
	"A paint roller",
	"Remove stains, fill holes, sand and paint internal and external surfaces",
	"Property restoration and renovation allows me to get more hands-on and turn voids to homes. Attention to detail ensures excellent preparation and an even better paint job, similar to having excellent HTML and even better CSS <a href='http://localhost/server/todo/decorator' target='_blank'>check out what I do</a>.",
	[
		{
			"id": 1,
			"title": "Preperation",
			"image": "scrapper",
			"image_descrption": "A scrapper",
			"description": ["Repair of surface damage and other imperfections using various compounds"],
		},
		{
			"id": 2,
			"title": "Painting",
			"image": "roller",
			"image_descrption": "A paint roller",
			"description": ["Apply finishes to walls, ceiilings and other surfaces using a brush and roller"],
		},
		{
			"id": 3,
			"title": "Wallpaper",
			"image": "roller",
			"image_descrption": "A paint roller",
			"description": ["Apply of variety wallpapers to walls"],
		},
	]
);


/*
		constructor for class: id, title, type, image, features, technologies, reports, description, git) 
	    
	*/


	/* 
	Project List
		Complete:
		1. cafes
		2. car-repair
		3. diabetes
		4. efexacademy
		5. emblem
		6. Jamaica
		7. London
		8. Hair Stylist
		9. Photo Gallery
		10. Portfolio

		Incomplete:
		20. handyman
		21. intranet
		22. Childcare
		23. Housing 
		24. Cookbook
	 */


	// Project object
	const cafes = new Project(
		1,
		"Cafes in London",
		"Website",
		"cafes",
		[
			{ "name": "Template" },
			{ "name": "Carousel" },
			{ "name": "Google Map" }
		],
		[
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "bootstrap" },
			{ "name": "json" },
			{ "name": "krita" }
		],
		"A website guide for cafes.",
		"cafes",
	),

	carrepair = new Project(
		2,
		"Car Repair",
		"Website",
		"carrepair",
		[
			{ "name": "Custom Design" },
			{ "name": "Modal" },
			{ "name": "Slideshow" }
		],
		[
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "bootstrap" },
			{ "name": "json" },
			{ "name": "krita" }
		],
		"A website to advertise mobile car repair services and preview work completed on variety of vechiles. My version of an existing <a href='http://www.mobilecarbodyrepair.co/m'>website for mobile car body repair</a>",
		"car-repair",
	),

	diabetes = new Project(
		3,
		"Diabetes",
		"Web application",
		"diabetes",
		[
			{ "name": "Custom Design" },
			{ "name": "BMI Test" },
			{ "name": "Contact form" }
		],
		[
			{ "name": "php" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "bootstrap" },
			{ "name": "krita" }
		],
		"A web application to test diabetes risks level.",
		"diabetes",
	),

	efexacademy = new Project(
		4,
		"Efexacademy",
		"Website",
		"efexacademy",
		[
			{ "name": "Custom Design" },
			{ "name": "Carousel" },
			{ "name": "Google Map" }
		],
		[
			{ "name": "php" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "w3" },
			{ "name": "maya" },
			{ "name": "krita" }
		],
		"A website to promote company services",
		"efexacademy",
	),

	emblem = new Project(
		5,
		"Emblem Books",
		"Website",
		"emblem",
		[
			{ "name": "Custom Design" },
			{ "name": "Carousel" },
			{ "name": "Google Map" }
		],
		[
			{ "name": "php" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "w3" },
			{ "name": "maya" },
			{ "name": "krita" }
		],
		"A website to promote company services",
		"emblem",
	),

	jamaica = new Project(
		6,
		"Jamaica Travel",
		"Website",
		"jamaica",
		[
			{ "name": "Template" },
			{ "name": "Modal" },
			{ "name": "Google Map" }
		],
		[
			{ "name": "php" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "w3" },
			{ "name": "krita" }

		],
		"A website to provide information about parishes in Jamaica.",
		"jamaica-travel",
	),

	london = new Project(
		7,
		"London Guide",
		"Website",
		"london",
		[
			{ "name": "Template" },
			{ "name": "Modal" },
			{ "name": "Google Map" }
		],
		[
			{ "name": "php" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "w3" },
			{ "name": "krita" }

		],
		"A website guide for London.",
		"london-guide",
	),

	parees = new Project(
		8,
		"Hair Stylist",
		"Website",
		"parees",
		[
			{ "name": "Custom Design" },
			{ "name": "Carousel" },
			{ "name": "Device Integration" }
		],
		[
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "bootstrap" },
			{ "name": "krita" },

		],
		"A website for company services.",
		"parees",
	),

	photogallery = new Project(
		10,
		"Photo Gallery",
		"Web ppplication",
		"photogallery",
		[
			{ "name": "Custom Design" },
			{ "name": "File Upload" },
			{ "name": "Device Integration" }
		],
		[
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "bootstrap" },
			{ "name": "krita" },

		],
		"A web application for photos.",
		"photo",
	),

	portfolio = new Project(
		9,
		"Portfolio",
		"Website",
		"portfolio",
		[
			{ "name": "Custom Design" },
			{ "name": "Carousel" },
			{ "name": "External Links" }
		],
		[
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "bootstrap" },
			{ "name": "krita" },

		],
		"A website for my projects.",
		"portfolio",
	);


	
	handyman = new Project(
		20,
		"Handy Man",
		"Website",
		"handyman",
		[
			{ "name": "Custom Design" },
			{ "name": "Carousel" },
			{ "name": "Google Map" }
		],
		[
			{ "name": "php" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "w3" },
			{ "name": "maya" },
			{ "name": "krita" }
		],
		"A website to promote company services.",
		"handyman",
	),

	intranet = new Project(
		21,
		"Intranet",
		"Web application",
		"intranet",
		[
			{ "name": "Custom Design" },
			{ "name": "Login & Register" },
			{ "name": "C.R.U.D" }
		],
		[
			{ "name": "php" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "bootstrap" },
			{ "name": "w3" },
			{ "name": "mysql" },
			{ "name": "krita" }
		],
		"A intranet to facilitate univerty services.",
		"intranet",
	),

	pacca = new Project(
		22,
		"Child Care",
		"Website",
		"pacca",
		[
			{ "name": "Custom Design" },
			{ "name": "Login/Register form" },
			{ "name": "Google Map" }
		],
		[
			{ "name": "laravel" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "bootstrap" },
			{ "name": "mysql" },
			{ "name": "krita" },

		],
		"A website for child care.",
		"pacca",
	),

	housing = new Project(
		23,
		"Housing",
		"Mobile application",
		"housing",
		[
			{ "name": "Custom Design" },
			{ "name": "Login / Register form" },
			{ "name": "Local Storage" }
		],
		[
			{ "name": "laravel" },
			{ "name": "jqm" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "w3" },
			{ "name": "json" },
			{ "name": "krita" }

		],
		"A mobile app for housing.",
		"housing",
	),

	cookbook = new Project(
		24,
		"Cookbook",
		"Mobile application",
		"cookbook",
		[
			{ "name": "Custom Design" },
			{ "name": "Local Storage" },
			{ "name": "Search Filter" }
		],
		[
			{ "name": "jqm" },
			{ "name": "html5" },
			{ "name": "css3" },
			{ "name": "javascript" },
			{ "name": "w3" },
			{ "name": "json" },
			{ "name": "krita" }

		],
		"A mobile app for cooking.",
		"cookbook",
	);


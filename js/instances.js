
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
	"Web Development",
	"web",
	"Plan, design and develop web system using the latest web technologie</p>",
	"As a Web Developer, I plan, design and develop web system using the latest web technologies such as HTML5, CSS3 JavaScript, ReactJs and Django. The methodology used for development ensure web system is accessible and meets all system requirements.</p>",
	[
		{
			"id": 1,
			"title": "Plan",
			"image": "plan",
			"description": ["Gather requirements for your system"],
		},
		{
			"id": 2,
			"title": "Design",
			"image": "design",
			"description": ["Define structure and layout of your system"],
		},
		{
			"id": 3,
			"title": "Develop",
			"image": "develop",
			"description": ["Build your system using latest web technologies"],
		},
		{
			"id": 4,
			"title": "Test",
			"image": "test",
			"description": ["Test and bug fix your system before delivery"],
		},
	]
),

technician = new Skillset(
	2,
	"PC Technician",
	"technician",
	"Hardware and software installation and upgrade for computer systems",
	"As a PC Technician, I build, repair and upgrade hardware for computer systems for Microsoft and Linux. Software installation and network setup..", 
	[	{
			"id": 1,
			"title": "Hardware",
			"image": "hardware",
			"description": ["Build, repair and maintain of desktop and laptop computers for Microsoft and Linux"],
		},
		{
			"id": 2,
			"title": "Software",
			"image": "software",
			"description": ["Installation and configuration of operating system, such as Microsoft Windows 10, Server 2016, Ubuntu 18.5 and Mint 20"],
		},
	]
),

modelling = new Skillset(
	4,
	"Artist / 3D Modeling",
	"modelling",
	"Sketch, detail, model, texture, lighting and rendering",
	"As an Artist, I sketch, detail and colour various objects mainly for leisure (it's  been as while) and other design purposes, but I get to take things to whole new level as a 3D Modeller.</p><p class='w3-margin-bottom'>Manuplating verticle, edges and faces in three-dimensional space, adding some light and the right material, to creative possible are virtually endless.",    
	[
		{
			"id": 1,
			"title": "Illustration",
			"image": "sketch",
			"description": ["Layout of object prepective and portion before adding detail"],
		},
		{
			"id": 2,
			"title": "Colouring",
			"image": "colour",
			"description": ["Blocking out sections for colouring, shading and highlights"],
		},
		{
			"id": 3,
			"title": "Modeling / Scupting",
			"image": "3d",
			"description": ["Combine and manipulate primitive objecs, such as a cube, sphere and torus to create complex geometry "],
		},
		{
			"id": 4,
			"title": "Lighting",
			"image": "lighting",
			"description": ["Add lighting to illuminate object and cast shadows"],
		},
		{
			"id": 5,
			"title": "Materials",
			"image": "texture",
			"description": ["Add diffuse colour, normal map, bump maps and obient-occulsion to object to improve realism"],
		},

	]
),

decorator = new Skillset(
	5,
	"Paint &amp; Decorator",
	"decorator",
	"Preparation of surfaces to paint for restoration or renovation.",
	"As a Painter and Decorator, things get literally hands-on. Repairing holes, mould and stain removal, followed by a professional paint job, turns voids to a place your want to call home",
	[
		{
			"id": 1,
			"title": "Preperation",
			"image": "scrapper",
			"description": ["Repair surface damage and imperfections for painting"],
		},
		{
			"id": 2,
			"title": "Painting",
			"image": "roller",
			"description": ["Mould treatment, primer and painting of internal and external surface "],
		},
	]
);


/*
		constructor for class: id, title, type, image, features, technologies, reports, description, git) 
	    
	*/


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


	// Project object
	const cafes = new Project(
		1,
		"Cafes in London ",
		"Website",
		"cafes",
		[
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
		"A website guide for cafes in London.",
		"cafes",
		"cafes"
	),

	carrepair = new Project(
		1,
		"Car Repair",
		"Website",
		"carrepair",
		[
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
		"A website to advertise mobile car repair services",
		"car-repair",
		"car-repair"
	),

	diabetes = new Project(
		3,
		"Diabetes - BMI Test",
		"Web application",
		"diabetes",
		[
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
		"diabetes"
	),

	efexacademy = new Project(
		4,
		"Efexacademy",
		"Website",
		"efexacademy",
		[
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
		"efexacademy"
	),

	emblem = new Project(
		4,
		"Emblem Books",
		"Website",
		"emblem",
		[
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
		"emblem"
	),

	handyman = new Project(
		6,
		"Handy Man",
		"Website",
		"handyman",
		[
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
		"handyman"
	),

	intranet = new Project(
		7,
		"Intranet",
		"Web application",
		"intranet",
		[
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
		"intranet"
	),

	jamaica = new Project(
		8,
		"Jamaica Travel",
		"Website",
		"jamaica",
		[
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
		"jamaica/index.php",
		"jamaica-travel"
	),

	london = new Project(
		9,
		"London Guide",
		"Website",
		"london",
		[
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
		"london/index.php",
		"london-guide"
	),

	pacca = new Project(
		10,
		"Child Care",
		"Website",
		"pacca",
		[
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
		"london/index.php",
		"pacca"
	),

	parees = new Project(
		11,
		"Hair Stylist",
		"Website",
		"parees",
		[
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
		"parees"
	),

	housing = new Project(
		12,
		"Housing",
		"Mobile application",
		"housing",
		[
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
		"housing"
	),

	cookbook = new Project(
		13,
		"Cookbook",
		"Mobile application",
		"cookbook",
		[
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
		"cookbook"
	),

	photogallery = new Project(
		14,
		"Photo Gallery",
		"Web ppplication",
		"photogallery",
		[
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
		"photo"
	),

	portfolio = new Project(
		15,
		"Portfolio",
		"Website",
		"portfolio",
		[
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
		"portfolio"
	);

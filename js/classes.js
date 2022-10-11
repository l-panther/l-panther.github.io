// Developer
class Developer {
	constructor() {
		this.name = "Leroy";
		this.telephone = "Leroy";
		this.email = "Leroy";
		this.mission = [
			{
				name: "Responsive Design",
				image: "responsive",
				image_description: "A mobile, tablet and desktop device",
				description: "Mobile first, fully responsive design and development"
			},
			{
				name: "Interactive UI/UX",
				image: "touch",
				image_description: "A finger over a red button with circular patterns surrounding it",
				description: "Interactive interface for enhanced user experience"
			},
			{
				name: "SEO Friendly",
				image: "seo",
				image_description: "A magnifying glass in front of a laptop",
				description: "Optimised to keep you ahead of the competetion"
			},
			{
				name: "Testing &amp; Bugfixes",
				image: "support",
				image_description: "A hammer and spanner in front of a laptop",
				description: "Regular testing, bug fixes and updates"
			}
		];
		this.cv = `More information about my skills and experience can be found on <span><a href="data/leroy_cv.pdf" target="_blank">my cv</a></span>.`;
		this.portfolio_description = `My current portfolio consists of websites and web applications for catering, travel and health. Each project is built using a different methods of implementation, with my most recent ddeveloped with object-orietation. For variety, I have also incorporated templates, as well as custom design techniques. You view all my repositories and code on <span><a href="https://github.com/l-panther/">my Github page</a></span> or for more information about my skills <span><a href="data/leroy_cv.pdf" target="_blank">check out my CV</a></span>`;
	}


	// Get Name
	getName() {
		return this.name
	}


	// Get Telephone
	getTelephone() {
		return this.telephone
	}


	// Get Email
	getEmail() {
		return this.email
	}


	// Get Mission
	getWebMission() {

		let output = "";

		for (var i = 0; i < this.mission.length; i++) {
			output += `
				<div class="col-sm-12 col-md-6  web-mission-item">
					<div class="row">
						<div class="col-sm-12 col-md-3 col-lg-3 w3-center">	
							
							<img src="images/skills/web/` + this.mission[i].image + `.png" alt="` + this.mission[i].image_description + `">
					
						</div>
						<div class="col-sm-12 col-md-9 col-lg-9">
							<dl>
								<dt><b>` + this.mission[i].name + `</b></dt>
								<dd>` + this.mission[i].description + `</dd>
							</dl>
						</div>
					</div>
				</div>
			`;
		}
		return output;
	}
}


// Skill
class Skillset extends Developer {

	// id, title, folder, image, statement, skills
	constructor(id, title, image, image_description, description_short, description_long, skills) {
		super();
		this.id = id;
		this.title = title;
		this.image = image;
		this.image_description = image_description; 
		this.description_short = description_short;
		this.description_long = description_long;
		this.skills = skills;
	}


	// Get skills
	getSkill() {
			
			// Output
			let output = `
			<div class="col-xs-12 skill">
				<h2>` + this.title + `</h2>

				<p class="pt-2 mb-4">` + this.description_long + `</p>
				<p class="w3-hide-small w3-hide-medium mb-4 portfolio_description">` + this.portfolio_description + `</p>
				
				<div class="w3-row">
					<div class="w3-col s12 m5 l12 w3-center">
						<img src="images/skills/` + this.image + `/` + this.image + `-small.png" alt="` + this.image_description + `" class="w3-hide-medium w3-hide-large skill-img">
						<img src="images/skills/` + this.image + `/` + this.image + `-med.png" alt="` + this.image_description + `" class="w3-hide-small w3-hide-large skill-img">
						<img src="images/skills/` + this.image + `/` + this.image + `-large.png" alt="` + this.image_description + `" class="w3-hide-small w3-hide-medium skill-img">
					</div>
					<div class="w3-col s12 m7 l12 features">
						
		`;
		for (let i = 0; i < this.skills.length; i++) {
			
			output += `
						<div class="w3-row mt-4">
							<div class="w3-col s2 m2 w3-center">
								<img src="images/skills/` + this.image + `/` + this.skills[i].image + `.png" alt="` + this.skills[i].image_description + `" class="skill-icon">
								
							</div>
							<div class="w3-col s10 m10">
								<dl>
									<dt>
										` + this.skills[i].title + `
									</dt>
									<dd>
										` + this.skills[i].description + `
									</dd>
								</dl>
							</div>
						</div>
					`;
		}
		output += `
					
					</div>
				</div>
			</div>
			`;
		return output;
	}


	getDetails() {
		let output = `
				<div class="col-sm-12">
					<h2>` + this.title + `</h2>
				</div>
				<div class="col-sm-12 col-md-12 pb-4">
					
					<p>` + this.description_long + `</p>
				</div>
				<img src="images/skills/` + this.image + `/` + this.image + `-large.png" alt=" ` + this.image_description + `">
				`;
			
				output += `<div class="pb-4 features">
				`;
		
		for (let i = 0; i < this.skills.length; i++) {

			output += `
					<div class="w3-row p-3">
						<div class="w3-col s2">
							<img src="images/skills/` + this.image + `/` + this.skills[i].image + `.png" alt="">
					
						</div>
						<div class="w3-col s10">
									<dl>
								<dt>
									` + this.skills[i].title + `
								</dt>
								<dd>
									` + this.skills[i].description + `
								</dd>
							</dl>
						</div>
					</div>
				`;
		}
		 	output += `</div></div>`;
		return output;
	}

}


// Project
class Project extends Developer {
	constructor(id, title, type, image, features, technologies, description, git) {
		super();
		this.id = id;
		this.title = title;
		this.type = type;
		this.image = image;
		this.features = features;
		this.technologies = technologies;
		this.description = description;
		this.git = git;
	}

	getScreenshot() {
		let output = `<figure>
						<a href="http://192.168.116.129:80/server/` + this.git + `" target="_blank" title="Click to view website"><img class="project-img" src="images/projects/` + this.image + `.png" alt="Screenshot of ` + this.image + `usserface for mobile and desktop" /></a>
						
						<figcaption>` + this.title + `</figcaption>

					</figure>
					`;
		return output;
	}

	// Show count position
	countProject(i) {
		let output = "";
		if (this.id == 1) {
			output += `<li data-target="#projectCarousel" data-slide-to="" + i + "" class="active" title="Project " + this.id + " - " + this.title + ""></li>`;
		} else {
			let elemId = this.id;
			output += `<li data-target="#projectCarousel" data-slide-to="" + i + "" title="Project " + this.id + " - " + this.title + ""></li>`;
		}
		return output;
	}


	// Show carousel
	showCard(i) {

		let output = `
					<div class="col-sm-4 col-md-3 col-lg-6 project">
					` + this.getScreenshot() + `	
				 	 </div>
		`;
		return output;
	}


	
	// Show carousel
	showCarousel(i) {

		let output = "";
								
		if (this.id == 1) {
			output += '<div class="carousel-item active"> <!-- Carousel item -->';
		} else {
			output += '<div class="carousel-item"> <!-- Carousel item -->';	
		}

		// Output
		output += `
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-7 w3-center project-preview-img">
						` + this.getScreenshot() + `	
						</div>
					</div>
				</div>
		`;

		return output;
	}


}
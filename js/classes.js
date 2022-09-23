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
				description: "Mobile first, fully responsive design and development"
			},
			{
				name: "Interactive UI/UX",
				image: "touch",
				description: "Interactive interface for enhanced user experience"
			},
			{
				name: "SEO Friendly",
				image: "seo",
				description: "Optimised to keep you ahead of the competetion"
			},
			{
				name: "Testing &amp; Bugfixes",
				image: "support",
				description: "Regular testing, bug fixes and updates"
			}
		];
		this.cv = "More information about my skills and experience can be found on <span><a href='data/leroy_cv.pdf' target='_blank'>my cv</a></span>.";
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
				<div class='col-sm-12 col-md-6  web-mission-item'>
					<div class=''>
						<div class='row'>
							<div class="col-sm-12 col-md-3 col-lg-3 w3-center">	
								
								<img src="images/skills/web/` + this.mission[i].image + `.png">
						
							</div>
							<div class="col-sm-12 col-md-9 col-lg-9">
								<dl>
									<dt><b>` + this.mission[i].name + `</b></dt>
									<dd>` + this.mission[i].description + `</dd>
								</dl>
							</div>
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
	constructor(id, title, image, description_short, description_long, skills, cv) {
		super(cv);
		this.id = id;
		this.title = title;
		this.image = image;
		this.description_short = description_short;
		this.description_long = description_long;
		this.skills = skills;
	}


	// Get skills
	getSkill() {
			let output = ``;	
	
			// Output
			output += `
			<div class="col-xs-12 skill">
				<h2>` + this.title + `</h2>

				<p class="pt-2 mb-4">` + this.description_long + `</p>
				
				<div class='w3-row'>
					<div class="w3-col s12 m5 l12 w3-center">
						<img src="images/skills/` + this.image + `/` + this.image + `-small.png" alt="" class="w3-hide-medium w3-hide-large">
						<img src="images/skills/` + this.image + `/` + this.image + `-med.png" alt="" class="w3-hide-small w3-hide-large">
						<img src="images/skills/` + this.image + `/` + this.image + `-large.png" alt="" class="w3-hide-small w3-hide-medium">
					</div>
					<div class='w3-col s12 m7 l12 features'>
						
		`;
		for (let i = 0; i < this.skills.length; i++) {
			
			output += `
						<div class="w3-row mt-4">
							<div class="w3-col s2 m2 w3-center">
								<img src='images/skills/` + this.image + `/` + this.skills[i].image + `.png' alt='' class="skill-img">
								
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
					<div class="col-sm-12 col-md-12 w3-center sill-img-lg">
						<img src="images/skills/` + this.image + `/` + this.image + `-med.png" alt="" class="w3-hide-small w3-hide">
					</div>
				</div>
			</div>
			`;
		return output;
	}


	getDetails() {
		let output = ``;
			
		output += `<div class="col-sm-12">
					<h2>` + this.title + `</h2>
				</div>
				<div class="col-sm-12 col-md-12 pb-4">
					
					<p>` + this.description_long + `</p>
				</div>
				<img src='images/skills/` + this.image + `/` + this.image + `-large.png' alt=''>
				<div class="pb-4 features">
				`;
		
		for (let i = 0; i < this.skills.length; i++) {

			output += `
					
						<div class="w3-row p-3">
							<div class="w3-col s2">
								<img src='images/skills/` + this.image + `/` + this.skills[i].image + `.png' alt=''>
						
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
class Project {
	constructor(id, title, type, image, features, technologies, description, git) {
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
						<a href='http://192.168.0.25:80/server/` + this.git + `' target='_blank' title="Click to view website"><img class='project-img' src='images/projects/` + this.image + `.png' alt='Website ` + this.id + ` screenshot' /></a>
						
						<figcaption>` + this.title + `</figcaption>

					</figure>
					`
		function changeImage() {
			
		}
		return output;
	}

	// Show count position
	countProject(i) {
		let output = "";
		if (this.id == 1) {
			output += "<li data-target='#projectCarousel' data-slide-to='" + i + "' class='active' title='Project " + this.id + " - " + this.title + "'></li>";
		} else {
			let elemId = this.id;
			output += "<li data-target='#projectCarousel' data-slide-to='" + i + "' title='Project " + this.id + " - " + this.title + "'></li>";
		}
		return output;
	}


	// Show carousel
	showCard(i) {

		let output = "";

		// Output
		output += `
					<div class="col-sm-4 col-md-3 col-lg-6 project">
					` + this.getScreenshot() + `	
				 	 </div>
		`;
		return output;
	}


	
	// Show carousel
	showCarousel(i) {

		let output = "",
			count = "";
		if (this.id == 1) {
			output += "<div class='carousel-item active'> <!-- Carousel item -->";
		} else {
			output += "<div class='carousel-item'> <!-- Carousel item -->";	
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

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
class Skillset {

	// id, title, folder, image, statement, skills
	constructor(id, title, image, description_short, description_long, skills) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.description_short = description_short;
		this.description_long = description_long;
		this.skills = skills;
	}


	// Get skills
	getSkill() {
		let output = `		
		
			<div class="col-xs-12 col-md-12 col-lg-12 skill">
				<div class="w3-row">
					
					<div class="w3-col s12 l6">
						<h2>` + this.title + `</h2>
						<p class="w3-margin-top w3-margin-bottom">` + this.description_long + `</p>
			
				<div class='w3-row'>
		`;
		for (let i = 0; i < this.skills.length; i++) {
			
			output += `
					<div class='w3-col s12 w3-margin-bottom detail'>
						<div class="w3-row">
							<div class="w3-col s3">
								<img src='images/skills/` + this.image + `/` + this.skills[i].image + `.png' alt=''>
						
							</div>
							<div class="w3-col s9">
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
					</div>
					`;
		}

		

	
			output += `	
				</div>
					</div>
					<div class="w3-col s12 l6 skill-img">
						<img src='images/projects/nojs.png' alt=''>
					</div>
				</div>
			</div>
		`;		
		
		return output;
	}


	// Get details
	getDetails() {

		let output = "";
		output += `
			<div class='text-container'>
				<h2>` + this.title + `</h2>
				<p class="w3-margin-top w3-margin-bottom">` + this.description_long + `</p>
			
				<div class='w3-row'>
		`;
		for (let i = 0; i < this.skills.length; i++) {
			
			output += `
					<div class='w3-col s12 w3-margin-bottom detail'>
						<div class="w3-row">
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
					</div>
					`;
		}

		

	
			output += `	
				</div>
				<img src='images/skills/` + this.image + `/` + this.image + `-large.png' alt=''>
			</div>
		</div>`;
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


	// Show count position
	countProject(i) {
		let count = 0;
		let output = "";
		if (this.id == 1) {
			output += "<li data-target='#projectCarousel' data-slide-to='" + 0 + "' class='active' title='Project " + this.id + " - " + this.title + "'></li>";
		} else {
			let elemId = this.id;
			output += "<li data-target='#projectCarousel' data-slide-to='" + this.id + "' title='Project " + this.id + " - " + this.title + "'></li>";
		}
		return output;
	}


	// Show carousel
	showCarousel(i) {

		let output = "", count = "";
		

		// Output
		output += `
					<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
					<div class="row">
						<div class="col-xs-6 project-preview-img">
							<img class='img-carousel' src='images/projects/` + this.image + `.png' alt='Website ` + this.id + ` screenshot' />		
						
						<ul class='project-options-container'> 
						
							<li> 
								<div id="` + this.image + `-preview" class='btn' title='View project in new tab'><a href='http://192.168.0.25:80/server/` + this.git + `' target='_blank'><i class='fa fa-eye'></i></a></div>
							</li>	

							<!-- <li>
								<button id="` + this.image + `-preview" class='btn' title='View project'><a href='http://192.168.0.25:80/server/` + this.git + `' target='_blank'><i class='fa fa-eye'></i></a></button>
							</li> --> <!-- End column -->	

							<li>
								<div class="btn" title='View source code'><a href='https://github.com/l-panther/` + this.git + `' target='_blank'><i class='fa fa-list'></i></a></div>
							</li> <!-- End column -->	

						</ul <!-- End .button-container -->
					</div <!-- End card -->
				
				</div>
				</div>
		`;
		return output;
	}

	getDetails() {
		let output = `
		<iframe src="https://192.168.0.25:80/server/` + this.git + `/" frameborder="0"></iframe>`;
	
		return output;
	}

}

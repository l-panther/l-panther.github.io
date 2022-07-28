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
		
			<div class="col-xs-12 col-md-6 col-lg-12 skill">
				<div class="w3-row">
					<div class="w3-col s3 m2 l2">
						<img src='images/skills/` + this.image + `/` + this.image + `.png' alt=''>
					</div>
					<div class="w3-col s9 m10 l10">
						<dt>` + this.title + `</dt>
						<dd>` + this.description_short + `</dd>
						<button id="` + this.image + `-modal" class="btn" data-toggle="modal"
					data-target="#detailModal">Read more</button>
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

		

		if (this.id != 5) {  

			output += `	
				</div>
				<img src='images/skills/` + this.image + `/` + this.image + `-large.png' alt=''>
			</div>
		`;
		} else {
			output += `
			</div>
			</div>
			<div class='media-container'>
			<h3>Home Renovation Job</h3>
			<p class="mb-4">A before and after video of the property to showcase the transformation. Video taken after stripping more of the wallpaper. My first walk-through failed to save and time was of the essence... Let the work</p>
			<div class="row mb-4">
				<div class="col-sm-7">
					<dl>
						<dt>Before</dt>
						<dd><i class="fa fa-check"></i>Wallpaper on all walls</dd>
						<dd><i class="fa fa-check"></i>Shelves and TV mounts on walls</dd>
						<dd><i class="fa fa-check"></i>Holes and damage to walls</dd>
						<dd><i class="fa fa-check"></i>Mould and stains on walls</dd>
						<dd><i class="fa fa-check"></i>Old Carpet and flooring</dd>
						<dd><i class="fa fa-check"></i>Old kitchen</dd>
					</dl>
				</div>
				<div class="col-sm-5">
					<div class="vid-demo">
						<video controls>
							<source src="media/before.mp4" type="video/mp4">
						</video>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-7">
					<dl>
						<dt>After</dt>
						<dd><i class="fa fa-check"></i>Removal wallpaper</dd>
						<dd><i class="fa fa-check"></i>Repair holes and damage</dd>
						<dd><i class="fa fa-check"></i>Treatment of mould/stains</dd>
						<dd><i class="fa fa-check"></i>Removal of all flooring</dd>
						<dd><i class="fa fa-check"></i>Removal of old kitchen</dd>
						<dd><i class="fa fa-check"></i>Paint walls, ceiling and skirting</dd>
					</dl>
				</div>
				<div class="col-sm-5">
					<div class="vid-demo">
						<video controls>
							<source src="media/complete.mp4" type="video/mp4">
						</video>
					</div>
				</div>
			</div>
			`;
		}
		output += `</div>`;
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
		let count = "";
		if (this.id == 1) {
			count += "<li data-target='#projectCarousel' data-slide-to='" + 0 + "' class='active' title='Project " + this.id + " - " + this.title + "'></li>";
		} else {
			count += "<li data-target='#projectCarousel' data-slide-to='" + this.id + "' title='Project " + this.id + " - " + this.title + "'></li>";
		}
		return count;
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
							<img class='img-carousel' src='images/projects/` + this.image + `.png' alt='Website ` + this.id + ` screenshot' />
						</div>
						<div class="col-sm-12 col-md-6 col-lg-5 project-info-carousel">
							<dl>
								<dt class="project-title">` + this.title + `</dt>
								<dd class="mb-2"><i class="w3-text-grey">` + this.type + `</i></dd>
							</dl>
												
							<div class='project-description'>
								
							<dl id='featureList'>
								<dt></dt>
		`;

		for (let i = 0; i < this.features.length; i++) {
			output += `
								<dd><i class='fa fa-check'></i>` + this.features[i].name + `</dd>
			`;

		}
		output += `
							</dl>
							<ul class='tech-list'>`;

		for (let j = 0; j < this.technologies.length; j++) {
			output += `<li><img src='images/technologies/` + this.technologies[j].name + `.png' alt='' title='` + this.technologies[j].name + `' class='tech-icon'></li>`;

		}
		output += `
							</ul>
						</div>
						
						<ul class='project-options-container'> 
						
							<li> 
								<div class='btn' title='View project in new tab'><a href='http://localhost:80/server/` + this.git + `' target='_blank' data-toggle="modal" data-target="#preview-alert"><i class='fa fa-eye'></i></a></div>
							</li>	

							<!-- <li>
								<button class='btn' title='View project'><i class='fa fa-eye' data-toggle="modal" data-target="#preview-alert"></i></button>
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
			<div class="row">
				<div class="col-sm-12 w3-center">
					<img src="images/projects/diabetes2.png" alt="">
				</div>
				<div class="col-sm-12 col-md-6 col-lg-4">
				
					<h2>` + this.title + `</h2>
					<p>` + this.description + `</p>
				</div>
			</div> <!-- End .w3-row -->
				
			<h2>Please come back later</h2>
			<p class=""><b>Information Coming Soon!!</b></p>
			`;
		return output;
	}

}
class Support {
	constructor(id, title, image, features) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.features = features;
	}



	// Show count position
	showCount(i) {
		let count = "";
		if (this.id == 1) {
			count += "<li data-target='#technicalCarousel' data-slide-to='" + i + "' class='active' title='Support " + this.id + "'></li>";
		} else if (this.id != 1) {
			count += "<li data-target='#technicalCarousel' data-slide-to='" + i + "' title='Support " + this.id + "'></li>";
		}
		return count;

	}


	// Show carousel
	showCarousel(i) {

		let output = "",
			count = "";
		if (this.id == 1) {
			output += "<div class='carousel-item active'> <!-- Carousel item -->";
		} else if (this.id != 1) {
			output += "<div class='carousel-item'> <!-- Carousel item -->";
		}

		output += "<div class='row w3-container'> <!-- Row -->";
		output += "<div class='col-lg-6 col-sm-12 w3-center support-img'> <!-- Column -->";
		output += "<img class='img-carousel' src='images/main/" + this.image + ".png' alt='Support " + this.id + " screenshot' />";
		output += "</div> <!-- End column-->";
		output += "<div class='col-lg-6 col-sm-12'> <!-- Column -->";

		// Description
		// Output
		output += "<h2 class='theme-color-bg'><span>" + this.title + "</span> Support</h2>";
		output += "<div class='project-desc'>";
		// output += "<p>" + this.description + "</p>";
		output += "</div>";

		output += "<ul>";

		for (let i = 0; i < this.features.length; i++) {
			output += "<li><i class='fa fa-check w3-margin-right'></i>" + this.features[i].name + "</li>";

		}
		output += "</ul>";


		output += "</div> <!-- End column -->";
		output += "</div> <!-- End row -->";
		output += "</div <!-- End row -->";

		return output;
	}


	// Show carousel
	showCard() {

		let output = "";

		output += "<div class='col-lg-4 col-sm-12'> <!-- Column -->";
		output += "<div class='card'> <!-- Card -->";
		output += "<div class='row w3-container'> <!-- Row -->";
		output += "<div class='col-lg-12 col-md-5 col-sm-12 w3-center support-img'> <!-- Column -->";
		output += "<img class='img-carousel' src='images/main/" + this.image + ".png' alt='Support " + this.id + " screenshot' />";
		output += "</div> <!-- End column-->";
		output += "<div class='col-lg-12 col-md-7 col-sm-12'> <!-- Column -->";

		// Description
		// Output
		output += "<h2 class='theme-color-bg'><span>" + this.title + "</span></h2>";
		output += "<div class='project-desc'>";
		// output += "<p>" + this.description + "</p>";
		output += "</div>";

		output += "<ul>";

		for (let i = 0; i < this.features.length; i++) {
			output += "<li><i class='fa fa-check w3-margin-right'></i>" + this.features[i].name + "</li>";

		}
		output += "</ul>";
		output += "</div> <!-- End column -->";
		output += "</div> <!-- End row -->";
		output += "</div> <!-- End card -->";
		output += "</div <!-- End column -->";

		return output;
	}


	// Show tab
	showList() {

		let output = "";

		// Description

		output += "<div class='row support-desc'>";
		output += "<div class='col-xs-1 w3-center'>";
		output += "<img src='images/support/" + this.image + ".png' alt='" + this.title + " icon'/>";
		output += "</div>";
		output += "<div class='col-xs-12'>";
		output += "<h3><span>" + this.title + "</span> Support</h3>";
		output += "<dl>";

		for (let i = 0; i < this.features.length; i++) {
			output += "<li><i class='fa fa-check w3-margin-right'></i>" + this.features[i].name + "</li>";

		}
		output += "</dl>";
		output += "</div> <!-- End column -->";
		output += "</div> <!-- End column -->";

		return output;
	}


	// Show carousel for list
	showCarouselList(i) {

		let output = "";
		if (this.id == 1) {
			output += "<div class='carousel-item active'> <!-- Carousel item -->";
		} else if (this.id != 1) {
			output += "<div class='carousel-item'> <!-- Carousel item -->";
		}

		output += "<img class='img-carousel' src='images/support/" + this.image + "2.png' alt='Support " + this.id + " screenshot' />";
		output += "</div>";

		return output;
	}

}

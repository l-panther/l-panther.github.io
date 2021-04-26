$(document).ready(function() {
	
	// getSlide("#cafeList"); // Get slideshow w3.css
	// getCard("#cafeList"); // Get card w3.css
	getCarousel("#cafeList"); // Get carousel bootstrap
	
	/* 
		========================================================
								FUNCTIONS
		========================================================
	*/
			
	// ============================ Card ============================
	function getCard(elemId) {
		/* 
			Function to display card using W3.CSS
			@elem id of the html element
			@dots id of the html element
		*/
		$.get(
			"data/cafes.json", 
			function(result) {
				
				var output = "",
				dot = "<span class='w3-badge slideDemo w3-border w3-hover-white'></span>"; // Set variable to empty string
				for (var i = 0; i < result.length; i++) { // For length of result
					output += "<!-- Slide 1 -->";
					output += "<div class='w3-col s12 m6 l6 cafe-container'>";
					output += "<div class=''><!-- Article -->";
					output += "<article class='w3-card cafe'><!-- Article -->";

					output += "<img src='images/main/" + result[i].image + ".png' alt='Food served by cafe' class='cafeImage'/>";
					output += "<h3>" + result[i].name + "</h3>";

					output += "<ul class='w3-ul w3-container travelOption'>";
					output += "<li>";
					output += "<i class='material-icons' title='Address'>&#xe0c8;</i><span aria-labelledby='tcAddress'>" + result[i].address + "</span>";
					output += "</li>";

					output += "<li>";
					output += "<i class='fa fa-check'></i>";
					output += "dddddff";
					output += "</li>";
					output += "</ul>";
					output += "<div class='mt-3 pb-3'>";

					output += "<button type='button' class='btn btn-primary'>More</button>";


					output += "</div>";
					output += "</article>";
					output += "</div>";
					output += "</div>";
				
				}
	
				$(elemId).html(output); // Insert content to element and refresh listview
			}, 
			"json"
		);
		$(cafeList).html(output); // Insert content to element and refresh listview
	}
		
	
	// ============================ Slideshow ============================
	function getSlide(elemId, dots) {
		/* 
			Function to display slideshow using W3.CSS
			@elem id of the html element
			@dots id of the html element
		*/
		var output = "",
			dot = "<span class='w3-badge slideDemo w3-border w3-hover-white'></span>"; // Set variable to empty string
			
		for (var i = 0; i < cafes.length; i++) { // For length of result

			output += "<!-- Slide 1 -->";
			output += "<div class='cafeSlides' tabindex='0'>";
			output += "<article class='cafe'><!-- Article -->";
			output += "<h2>" + cafes[i].name + "</h2>";
			output += "<div class='w3-center w3-margin-bottom rating'>";
			
			for (var j = 0; j < cafes[i].goldstars; j++) {
				output += "<i class='fa fa-star'></i>";
			}
			for (var k = 0; k < cafes[i].greystars; k++) {
				output += "<i class='fa fa-star star-grey'></i>";
			}
			output += "<span class='w3-margin-left'>" + cafes[i].ratings + "</span>";
			output += "</div>";
			output += "<p>" + cafes[i].description + "</p>";
			output += "<!-- Row -->";
			output += "<div class='w3-row'>";
			output += "<!-- Image column -->";
			output += "<div class='w3-col s12 m4 l4'>"
			output += "<img src='images/main/" + cafes[i].image + ".png' alt='Food served by cafe' class='cafeImage'/>";
			output += "</div> <!-- End image column -->";
			output += "<!-- Travel column -->";
			output += "<div class='w3-col s12 m8 l8'>";
			output += "<ul class='travelOption'>";
			output += "<li>";
			output += "<div class='w3-badge badgeIcon' id='tcAddress'><i class='material-icons' title='Address'>&#xe0c8;</i></div>";
			output += "<span aria-labelledby='tcAddress'>" + cafes[i].address + "</span>";
			output += "</li>";
			output += "<li>";
			output += "<div class='w3-badge badgeIcon' id='tcTube'><i class='material-icons' title='Nearest train station'>&#xe533;</i></div>";
			output += "<span aria-labelledby='tcTube'>London Waterloo East</span>";
			output += "</li>";
			output += "<li>";
			output += "<div class='w3-badge badgeIcon' id='tcBus'><i class='fa fa-bus' title='Nearest bus route'></i></div><span aria-labelledby='tcBus'>" + cafes[i].bus + "</span>";
			output += "</li>";
			output += "</ul>";
			output += "</div><!-- End travel column --></div><!-- End row -->";
			output += "</article>";
			output += "</div>";
		}
		$(dots).html(dot.repeat(cafes.length)); // Insert content to element and refresh listview
		$(cafeList).html(output); // Insert content to element and refresh listview
		
	}
	
	
	// ============================ Carousel ============================
	function getCarousel(elemId) {
		/*
			Function to display slideshow using Bootstrap 4
			@elem id of the html element
			@dots id of the html element
		*/
		$.get(
			"data/cafes.json",
			function(result) {
				
				var output = ""; // Set variable
				for (var i = 0; i < result.length; i++) { // For length of result
					var link = "";
					if(result[i].id == 1) {
					   output += "<div class='carousel-item active cafe'>";
					} else {
						output += "<div class='carousel-item cafe'>";
					}	

					output += "<h3>" + result[i].name + "</h3>";
					output += "<div class='w3-center rating'>";

					for (var j = 0; j < result[i].goldstars; j++) {
						output += "<i class='fa fa-star'></i>";
					}
					for (var k = 0; k < result[i].greystars; k++) {
						output += "<i class='fa fa-star grey'></i>";
					}
					output += "<span class='w3-margin-left w3-text-blue'>" + result[i].ratings + "</span>";
					output += "</div>";
					

					// output += "<p>" + cafes[i].description + "</p>";

					output += "<!-- Row -->";
					output += "<div class='w3-row'>";
					output += "<!-- Image column -->";
					output += "<div class='w3-col s12 m5 l5'>"
					output += "<img src='images/main/" + result[i].image + ".png' alt='Food served by cafe' class='cafeImage'/>";
					output += "</div> <!-- End image column -->";
					output += "<!-- Travel column -->";
					output += "<div class='w3-col s12 m7 l7'>";
					output += "<a href='#map' title='View in map'><h4><i class='material-icons w3-padding-right w3-text-grey'>location_on</i>" + result[i].address + "</h4></a>";
					
					output += "<ul class='w3-container features'>";
					output += "<li>";
					output += "<i class='fa fa-check'></i>";
					output += result[i].type;
					output += "</li>";
					for(var l = 0; l < result[i].features.length; l++) {
						output += "<li>";
						output += "<i class='fa fa-check'></i>";
						output += result[i].features[l].item;
						output += "</li>";
					}

					output += "</div><!-- End travel column --></div></div><!-- End row -->";
					output += "</div><!-- End carousel item -->";
					
					
					for(var q = 0; q < result.length; q++) {
						
						if(result[q].id == 1) {
						   link += "<li data-target='#cafeCarousel' data-slide-to='" + i + "' class='active'></li>";	
						} else {
						
						   link += "<li data-target='#cafeCarousel' data-slide-to='" + i  + "'></li>";
						}	
					}
				}
	
				$("#indicators").html(link); // Insert content to element and refresh listview
				$(elemId).html(output); // Insert content to element and refresh listview
			}, 
			"json"
		);
	}
	
});
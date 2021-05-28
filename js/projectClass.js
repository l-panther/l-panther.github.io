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
   showCount(i) {
        let count = "";
        if(this.id == 1) { 
			count += "<li data-target='#projectCarousel' data-slide-to='" + i + "' class='active' title='Project " + this.id + "'></li>"; 
		} else if (this.id != 1) {
			count += "<li data-target='#projectCarousel' data-slide-to='" + i + "' title='Project " + this.id + "'></li>"; 
		}
       return count;

   }
    

    // Show carousel
    showCarousel(i) {
        
        let output = "",
            count = "";
        if(this.id == 1) { 
			output += "<div class='carousel-item active'> <!-- Carousel item -->"; 
		} else if (this.id != 1) {
			output += "<div class='carousel-item'> <!-- Carousel item -->";
		}

		// Output
		output += "<h2 class='theme-color-bg text-center'>" + this.title + "</h2>";
		output += "<div class='row w3-container'> <!-- Row -->";
		output += "<div class='col-lg-5 col-md-5 col-sm-12 w3-center'> <!-- Column -->";
		output += "<img class='img-carousel' src='images/projects/" + this.image + ".png' alt='Website " + this.id + " screenshot' />";
		output += "</div> <!-- End column-->";
		output += "<div class='col-lg-7 col-md-7 col-sm-12'> <!-- Column -->";
		
		// Description
		output += "<h3><b>Description</b></h3>";
		output += "<div class='project-desc'>";
		output += "<p>" + this.description + "</p>";
		output += "</div>";
		
		// Features
		output += "<h3 class='w3-margin-top'><b>Features</b></h3>";
		output += "<ul>";
		
		for (let i = 0; i < this.features.length; i++) {
			output += "<li><i class='fa fa-check w3-margin-right'></i>" + this.features[i].name + "</li>";
		
		}
		output += "</ul>";
		
		// Technologies
		output += "<h3 class='w3-margin-top'><b>Technologies</b></h3>";
		output += "<ul class='tech-list'>";
		
		for (let j = 0; j < this.technologies.length; j++) {
			output += "<li><img src='images/technologies/" + this.technologies[j].name + ".png' alt='' title='" + this.technologies[j].name + "' class='tech-icon'></li>";
		
		}
		output += "</ul>";
		output += "</div> <!-- End column -->";
		output += "</div> <!-- End row -->";
		
		// Report button
		output += "<div class='w3-row w3-center buttons'> <!-- Row -->";
		
		output += "<div class='w3-col s6 m6 l6 button'> <!-- Column -->";
		output += "<div class='w3-padding' title='View report in new tab'><i class='fa fa-globe'></i><a href='data/" + this.image + ".pdf' target='_blank'><span class='w3-hide-small'>VIEW</span> REPORT</a></div>";
		output += "</div> <!-- End column -->";
		
		// Code button
		output += "<div class='w3-col s6 m6 l6 button'> <!-- Column -->";
		output += "<div class='w3-padding' title='View source code in Github'><i class='fa fa-list'></i><a href='https://github.com/l-panther/" + this.git + "' target='_blank'><span class='w3-hide-small'>VIEW</span> CODE</a></div>";
		output += "</div> <!-- End column -->";
		output += "</div <!-- End row -->";
		output += "</div <!-- End row -->";
        
        return output;
    }   
}

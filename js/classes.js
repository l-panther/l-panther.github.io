class Project {
    constructor(id, title, type, image, features, technologies, report, description, git) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.image = image;
        this.features = features;
        this.technologies = technologies;
        this.report = report;
        this.description = description;
        this.git = git;
    }
    
    
        
    // Show report
   showReport(id) {
        let report = "",
            elem = "#reportBtn",
            elemId = elem + id;
        $(elemId).click(function() {
            alert(elemIdl);
           
        });  
   }
    

    // Show carousel
    showCarousel(i) {
        
        let output = "",
            count = "";
        if(this.id == 1) { 
			output += "<div class='carousel-item active'> <!-- Carousel item -->"; 
			count += "<li data-target='#projectCarousel' data-slide-to='" + i + "' class='active'></li>"; 
		} else if (this.id != 1) {
			output += "<div class='carousel-item'> <!-- Carousel item -->";
			count += "<li data-target='#projectCarousel' data-slide-to='" + i + "'></li>"; 
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
		
		// Website button
		output += "<div class='w3-row w3-center buttons'> <!-- Row -->";
		
		output += "<div class='w3-col s6 m6 l6 button'> <!-- Column -->";
		output += "<div class='w3-padding' title='View website in new tab'><i class='fa fa-globe'></i><a href='data/" + this.image + ".pdf' target='_blank'><span class='w3-hide-small'>VIEW</span> REPORT</a></div>";
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

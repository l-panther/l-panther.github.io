class Phase {
    constructor(id, title, image, tasks, description) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.tasks = tasks;
        this.description = description;
    }
    
    // Show carousel
    showPhase() {
        let output = "";
       
		output += "<div class='col-lg-6 phase'> <!-- Carousel item -->";
		// Output
		output += "<div class='row'>";
		output += "<div class='col-sm-2 w3-center'> <!-- Column -->";
		output += "<img src='images/develop/" + this.image + ".png'> <!-- Column -->";
		output += "</div> <!-- End column -->";
		output += "<div class='col-sm-10'> <!-- Column -->";
		output += "<h3>" + this.title + "</h3>";
		output += "<p>" + this.description + "</p>";
		output += "<dl><dt id='" + this.title + "'>" ;
		
		for (let i = 0; i < this.tasks.length; i++) {
			output += "<dd><i class='fa fa-check w3-margin-right'></i>" + this.tasks[i].name + "</dd>";
		}
		output += "</dl>";
		output += "</div <!-- End row -->";
		output += "</div <!-- End row -->";
		output += "</div <!-- End row -->";
        
        return output;
    }   
}

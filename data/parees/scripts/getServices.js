class Service {

	constructor(name, price, service1, service2, service3) {
		this.name = name;
		this.price = price;
		this.service1 = service1;
		this.service2 = service2;
		this.service3 = service3;
	}
	
	getCard() {
		
		// Display ouput as a card on html page
		let output = "",
			availServices = [this.service1, this.service2, this.service3]; // Set variables
		
		output += "<div class='col-lg-4 col-md-4'>";
		output += "<div class='w3-card w3-round-large w3-white'>";
		output += "<dl class='price'>";
		output += "<dt id='" + this.name + "' class='w3-center'>" + this.name + "</dt>";
		output += "<dd aria-labelledby='" + this.name + "' class='price-total'><span class='w3-medium'>from</span> <br><b><span class='w3-large currency'>£</span>" + this.price + "</b></dd>";
		for (let i = 0; i < availServices.length; i++) { // For length of variable, output service
			
			output += "<dd aria-labelledby='" + this.name + "'><i class='fa fa-check'></i>" + availServices[i] + "</dd>";
		}
		output += "</dl></div></div>";
		return output;
	}	
}


/* Instants */
const basic = new Service("BASIC", "50.00", "Wash hair", "Blow dry", "wrap"); 
const extra = new Service("EXTRA", "50.00", "Oil Treatment", "Moisturise", "wrap"); 
const relaxer = new Service("RELAXER", "60.00", "Wash hair", "Blow dry", "wrap"); 
const color = new Service("COLOR", "50.00", "Highights", "Full Head", "custom"); 
const weave = new Service("WEAVE", "60.00", "Single Track", "Full Head", "Custom"); 
const bridal = new Service("BRIDAL", "150.00", "Bride", "Bridemaids", "Full Service"); 


/* Function initiate on load */
$(document).ready(function() {
	
	let output = "",
		serviceList = [basic, extra, relaxer, color, weave, bridal] || []; // Variables
	
	try {
		// For length of array, store each output as a ccard
		for(let i = 0; i < serviceList.length; i++) {
			output += serviceList[i].getCard();
		}
		// Insert output to html 
		$("#serviceList").html(output);
	} 
	catch (err) {
		// Show error
		$("#serviceList").html(err.message);
	}
	
	// Toggle menu bars and close icon 
	$("#primarynav .open").click(function() {
		$(this).hide();
		$("#primarynav .close").show().click(function() {
			$(this).hide();
			$("#primarynav .open").show();
		});	
	});
	
	
	// Add box shadow on scroll
	$(window).scroll(function() {
		if(window.pageYOffset > 60) {
			$("nav").css("box-shadow", "0px 0px 4px 0px #1d1d1d");
		} else { 
			$("nav").css("box-shadow", "none");
		}
	});
	
	
});
	
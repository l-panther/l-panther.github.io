class Service {

	constructor(name, price, service1, service2, service3, description) {
		this.name = name;
		this.price = price;
		this.service1 = service1;
		this.service2 = service2;
		this.service3 = service3;
		this.description = description;
	}

	getDetails() {

		// Display ouput as a card on html page
		let output = "",
			availServices = [this.service1, this.service2, this.service3]; // Set variables

		output += `
		<div class="w3-col s12">
			<dl>
				<dt id="` + this.name + `" class="sr-only">` + this.name + `</dt>
				<dd aria-labelledby="` + this.name + `" >
					
					` + this.name + `
				</dd>
				<dd aria-labelledby="` + this.name + `" >	
					` + this.description + `
				</dd>`;
	
		output += `</dl></div></div>`;
		return output;
	}

	getCard() {

		// Display ouput as a card on html page
		let output = "",
			availServices = [this.service1, this.service2, this.service3]; // Set variables

		output += `
				<div class="w3-col s6 m4 l4 w3-center">
					<div class="w3-card w3-round-large w3-white">
						<dl class="price">
							<dt id="` + this.name + `" class="w3-center">` + this.name + `</dt>
								<dd aria-labelledby="` + this.name + `" class="price-total">
								<span class="w3-medium">from</span> <br>
								<b><span class="w3-large currency">£</span>` + this.price + `</b>
							</dd>`;
		for (let i = 0; i < availServices.length; i++) { // For length of variable, output service

			output += `<dd aria-labelledby="` + this.name + `"><ion-icon name="checkmark-outline"></ion-icon>` + availServices[i] + `</dd>`;
		}
		output += "</dl></div></div>";
		return output;
	}
}


/* Instants */
const basic = new Service(
	"BASIC", 
	"50.00", 
	"Wash hair", 
	"Blow dry", 
	"wrap", 
	"Our basic service"
),
extra = new Service(
	"EXTRA", 
	"50.00", 
	"Oil Treatment", 
	"Moisturise", 
	"wrap",
	"We provide an extra service"
),
relaxer = new Service(
	"RELAXER", 
	"60.00", 
	"Wash hair", 
	"Blow dry", 
	"wrap",
	"If you have relaxed afro hair, we offer a full range of relaxers for all different hair types. If you are new to relaxer and have virgin hair you will benefit from a consultation prior to applying chemical and information about how to care for your new hairstyle. We also offer Body Wave, the latest in chic hair for all discerning clientele "
),
color = new Service(
	"COLOUR", 
	"50.00", 
	"Highights", 
	"Full Head", 
	"custom",
	"At Parees Taylor you can indulge your inner diva with a range of colour treatments for you hair using a range of permanent, semi-permanent and rinses from L'Oreal, Revlon and Elasta QP."
),
weave = new Service(
	"WEAVE", 
	"60.00", 
	"Single Track", 
	"Full Head", 
	"Custom",
	"We do all weaves using a hair net which helps people who may have problem areas. Weaves are done in complete privacy."
),
bridal = new Service(
	"BRIDAL",
	 "150.00",
	 "Bride", 
	 "Bridemaids", 
	 "Full Service",
	 "We offer a full bridal service where we will do hair for your entire bridal party. If you are getting married, call for a consultation."
);


/* Function initiate on load */
$(document).ready(function () {

	let services = "";
	const serviceList = [basic, extra, relaxer, color, weave, bridal] || []; // Variables

	try {
		// For length of array, store each output as a ccard
		for (let i = 0; i < serviceList.length; i++) {
			services += serviceList[i].getCard();
		}
		// Insert output to html 
		$("#serviceList").html(services);
	}
	catch (err) {
		// Show error
		$("#serviceList").html(err.message);
	}

	// Toggle menu bars and close icon 
	$("#primarynav .open").click(function () {
		$(this).hide();
		$("#primarynav .close").show().click(function () {
			$(this).hide();
			$("#primarynav .open").show();
		});
	});


	// Add box shadow on scroll
	$(window).scroll(function () {
		if (window.scrollY > 60) {
			$("nav").css("box-shadow", "0px 0px 2px 0px #1d1d1d");
		} else {
			$("nav").css("box-shadow", "none");
		}
	});


});

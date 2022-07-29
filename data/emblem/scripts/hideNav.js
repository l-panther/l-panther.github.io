$(document).ready(function () {

	// Variables
	let fullpath = window.location.pathname,
		splitpath = fullpath.split("/"),
		removeLastElem = splitpath.pop(),
		path = removeLastElem.split(".")[0],
		links = $("#primarynav li").children().addClass("w3-hover-none"),
		dropdown = $("div .w3-dropdown-content").children().addClass("w3-hover-none");

	scroll();

	// Switch for active link
	switch (path) {
		case "":
			setActive(".index");
			break;
		case "index":
			setActive(".index");
			break;
		case "books":
			setActive(".books");
			break;
		case "nineteen_century":
			setActive(".nineteen");
			break;
		case "delivery":
			setActive(".delivery");
			break;
		case "contact":
			setActive(".contact");
			break;
	}


	// Show navigation on small screen
	$("#mini-nav").click(function () {
		hideShow(); /* Get element and on click call function */
	});


	// Show navigation on small scree
	function setActive(id) {
		$("#primarynav a").removeClass("active");
		$(id).addClass("active");
	}


	// Function to hide navigation on small dvices 
	function hideShow() {
		var navbar = $("#navbar").toggleClass("w3-hide"); /* Get element */
	}


	// Scroll
	function scroll() {

		// Get the offset position of the navbar
		function getOffset() {

			var skipLink = $("#toTop");

			if (window.pageYOffset <= 400) { // If window offset is less than or equal to number
				skipLink.fadeOut(); //Fade out
			} else { // Else
				skipLink.fadeIn(); // Fade in
			}
		}
		window.onscroll = getOffset; // On window scroll call getOffset
	}


});
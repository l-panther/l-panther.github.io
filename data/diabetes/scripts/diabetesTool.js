$(document).ready(function() {	
	// ................................ * BMI Calculation * ................................
	// *** Function to set id to display: inline block ***
	function displayMessage(name) { $(name).show(); }

	// *** Function to set id to display: none ***
	function hideMessage(name) { $(name).hide(); }

	// *** Function to insert message in HTML ***
	function showFactor(name, string) { $(name).html(string); }

	// * Get Radio Button *
	function getRadio(name1, name2, name3, name4) {
		var radioButton;
		var i = 0;
		var answer1 = document.getElementById(name1);
		var answer2 = document.getElementById(name2);
		var answer3 = document.getElementById(name3);
		var answer4 = document.getElementById(name4);
		var radios = [answer1, answer2, answer3, answer4];
		for(i; i < radios.length; i++) {
			if(radios[i].checked) {
				radioButton = parseInt(radios[i].value);
				break; } 
		}
		return radioButton;
	}

	// * Get Results *
	function getResult(radios) {
		var result = 0;
		for (var i = 0; i < radios.length; i++) {
			var current = parseInt(radios[i]);
			result += current; }
		return result;
	}

	// * Get Risk * 
	function getRisk(result) {
		if(result > 25) {
			displayMessage("#highrisk_result");
			hideMessage("#lowrisk_result");
			hideMessage("#midrisk_result");
		} else {
			hideMessage("#highrisk_result"); }

		if(result >= 15 && result <= 25) {
			displayMessage("#midrisk_result");
		} else {
			hideMessage("#midrisk_result"); }

		if(result < 15) {
			displayMessage("#lowrisk_result");
		} else {
			hideMessage("#lowrisk_result"); }
	}

	// * Get Message * 
	function showFactors(result) {
		var message = "",
			factors = "",
			risks = [];
			
		// Add Factor
		function addFactor(result, riskString) {

			if(result >= 8) {
				var string = " your <span class='factor-bold'>" + riskString + "</span>";
				risks.push(string); 
			} 
		}
		age = addFactor(result[0], "age"),
		bmi = addFactor(result[1], "bmi"),
		family = addFactor(result[2], "family"),
		diet = addFactor(result[3], "diet");
	
		if(risks.length == 1) { 
			factors = risks; 
		} else if(risks.length == 2) {
			factors = risks.join(" and");
		} else if (risks.length == 3) {
			factors = risks[0] + "," + risks[1] + " and" + risks[2];
		} else if (risks.length == 4) {
			factors = risks[0] + "," + risks[1] + "," + risks[2] + " and" + risks[3];
		}
		
		message += factors + ".";
		$("#risk_factors").html(message); // Add text to html 
	}

	// ------------------------------------------- # Program # ----------------------------------------------- 
	$("#calculate").click(function(e) {
		var risks = [];
		var radio1 = getRadio("age_ans1", "age_ans2", "age_ans3", "age_ans4"); // Get radio buttons
		var radio2 = getRadio("bmi_ans1", "bmi_ans2", "bmi_ans3", "bmi_ans4"); // Get radio buttons
		var radio3 = getRadio("family_ans1", "family_ans2", "family_ans3", "family_ans4"); // Get radio buttons
		var radio4 = getRadio("diet_ans1", "diet_ans2", "diet_ans3", "diet_ans4"); // Get radio buttons
		var radios = [radio1, radio2, radio3, radio4]; // Radios array
		
		getRisk(getResult(radios)); // Calculate array and display result
		var r = showFactors(radios); // Calculate array and display result
		e.preventDefault(); // Prevent default
	});


});

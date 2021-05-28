$(document).ready(function() {
	
    /*
        constructor for class: id, title, type, image, features, technologies, reports, description, git) 
        
    */
    
	let row1 = "",
		row2 = "",
        
        // Project object
		task1 = new Phase(
			1,
			"Plan",
			"plan",
			[ 
				{"name":"Gather Requirements"},
				{"name":"Project Planning"},
				{"name":"Client Approval"},
			],
			"We will design, develop and test your system using the latest programming technologies.",
			"cafes",
			"cafes"
		),	
        
        task2 = new Phase(
			2,
			"Develop",
			"develop",
            [ 
				{"name":"Build Systm"},
				{"name":"Test"},
				{"name":"Client Approval"},
			],
            "We will design, develop and test your system using the latest programming technologies."
		),	
		
        task3 = new Phase(
			3,
			"Delivery",
			"delivery",
            [ 
				{"name":"Completed System"},
				{"name":"Source Code"},
				{"name":"Documentation"}
			],
			"We will delivery your complete system, source code and documentation"
		),	
        
        task4 = new Phase(
			4,
			"Support",
			"support",
			[ 
				{"name":"Maintenance"},
				{"name":"Bug Fixes"},
				{"name":"Enhancements"},
			],
			"We will provide you with system maintenance, including bug fixes and enhancements."
		);
	
	row1 += task1.showPhase() + task2.showPhase();
	row2 += task3.showPhase() + task4.showPhase();
	
    // Insert output into html 
	$("#phaseRow1").html(row1); 
	$("#phaseRow2").html(row2); 
});



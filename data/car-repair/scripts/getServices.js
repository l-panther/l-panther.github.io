$(document).ready(function() {
	
	getList("#servicesList"); // Get list
	
	function getList(servicesList) {
		// Get data from json file
        $.get(
            "data/services.json",
            function(result) {
                // Get data from file
                var services = ""; // Set variable to empty string
                for (var i = 0; i < result.length; i++) {
                    // For length of result output service
                    services +=
                        "<!-- Service " + result[i].id + " --> \
						<div class='w3-row'> \
							<div class='w3-col s12 m2 l2'> \
								<img src='images/services/" + result[i].image + ".png' alt='Service logo'/> \
							</div> \
							<div class='w3-col s12 m10 l10'> \
								<h3>" + result[i].name + "</h3> \
								<p class='price'><i>From " + result[i].price + "</i></p> \
								<p>" + result[i].description + "</p> \
							</div> \
						</div>";
                }
                $(servicesList).html(services); // Insert content to element 
            },
            "json"
        );	
    }

    setTimeout(moveLeft, 100);

    function moveLeft() {
        $("#car img").animate({rotate: '0.3deg'}, "fast");
        $("#car img").animate({rotate: '-0.3deg'}, "fast");
        $("#car img").animate({rotate: '0.3deg'}, "fast");
        $("#car img").animate({rotate: '-0.3deg'}, "fast");
        $("#car img").animate({marginLeft: '0px'}, "slow");
        $("#car img").animate({marginLeft: '6px'}, "fast");
    }
});
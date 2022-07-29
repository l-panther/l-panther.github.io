$(document).ready(function() {
	
	// Map will display location and infor window for company
	// User will be used for access to gealocation. If granted, use function
	
	// Function will get user latitude and longitude and show map as a marker
	
	// ============================ MAP ============================ //
	// Map will display location and infor window for company
	// User will be used for access to gealocation. If granted, use function
	
	// Function will get user latitude and longitude and show map as a marker
	let page = location.href,
		path = page.indexOf("contact");
	
	if(path != -1) {
	
		var message = document.getElementById("nogeolocation"),
			efex = new google.maps.LatLng(51.359750, -0.136040), // Co-ordinates for company to centered on map
			width = window.innerWidth;
		// ============================ MAP ============================ //
		var mapOptions = { // Variable for map options
			center: efex, // Co-ordinates for company to centered on map
			mapTypeControl: true, // Control for map
			zoom: 15, // Zoom level
			viewMapControl: true, 
			streetViewControl: true, // Street view control
			panControl: true,
			zoomControl: true,
			scaleControl: true,
			overviewMapControl: true,
			rotateControl: true 
		};

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions),
		 	map2 = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions); 
		
		let infowindow1 = new google.maps.InfoWindow({  // New info window
 			content:"<div class='w3-center'><h4><b>Efex Academy</b></h4><div class='w3-center ratings'><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star grey'></i></div><p>All your exhibition requirements</p></div>" // Content for window
		});
	
		// ============================ MARKER ============================ /
		
		var marker = new google.maps.Marker({ // New marker
			position: efex // Position for marker
		});

		showMarker(width);
		$(window).on("resize", function() {
			showMarker(window.innerWidth);
		});
		
		google.maps.event.addListener(marker, 'click', function() { // Add listener for click on marker
			infowindow1.open(map,marker); // Open info window
		});
		google.maps.event.addListener(marker, 'click', function() { // Add listener for click on marker
			infowindow1.open(map2,marker); // Open info window
		});

		// ============================ GEOLOCATION ============================ //
		if (navigator.geolocation) { // If accesss to geolocation
			navigator.geolocation.getCurrentPosition(showPosition); // Use get current position with function and argument
		} else { // Else
			message.innerHTML = "Geolocation is not supported by this browser."; // Show message
		}

		function showPosition(position) { // Get position function

			var user = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // Co-ordinates for marker

			var marker5 = new google.maps.Marker({ // New marker
			position: user, // Position for marker
			icon: 'images/icons/currentlocation.png' // Image for con	
			});

			mapOptions = { // Variable for map options
			center: user, // Co-ordinates for company to centered on map
			};
			marker5.setMap(map); // Set marker to map

			var infowindow5 = new google.maps.InfoWindow({ // New info window
				content:"You are here" // Content for window
			});
			infowindow5.open(map,marker5); // Open marker	
			google.maps.event.addListener(marker5, 'click', function() { // Add listener for click on marker
				infowindow5.open(map,marker3); // Open info window
			}); 
		} 	
		
		function showMarker(width) {
			
			if(width < 991) {
				marker.setMap(map); // Set marker to map
				infowindow1.open(map2,marker); // Open info window

			} else if (width > 991) {
				marker.setMap(map2); // Set marker to map
				infowindow1.open(map2,marker); // Open info window
			}
		}
	}
});

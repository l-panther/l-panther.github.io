$(document).ready(function () {
	
	// Map will display location and infor window for company
	// User will be used for access to gealocation. If granted, use function
	
	// Function will get user latitude and longitude and show map as a marker
	let page = location.href,
		path = page.indexOf("contact");
	
	if(path != -1) {
	
		// ============================ MAP ============================ //
		var lat = 51.359750, long = -0.136040;
		var mapOptions = { // Variable for map options
			center: new google.maps.LatLng(lat, long), // Co-ordinates for company to centered on map
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
		var mapOptions2 = { // Variable for map options
			center: new google.maps.LatLng(lat, long), // Co-ordinates for company to centered on map
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

		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); // Variable for new map. Set to id with map options	
		var map2 = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions2); // Variable for new map. Set to id with map options	

		// ============================ MARKER ============================ //
		var markerCenter = new google.maps.LatLng(lat, long); // Co-ordinates for marker
		var marker = new google.maps.Marker({ // New marker
			position: markerCenter, // Position for marker
		});
		
		marker.setMap(map); // Set marker to map
		marker.setMap(map2); // Set marker to map

		// ============================ INFO WINDOW ============================ //
		var infowindow = new google.maps.InfoWindow({  // New info window
		  content:"<b>Efex Academy</b> <br><br> A complete service for all your exhibition and display requirements" // Content for window
		});

		// ============================ GEOLOCATION ============================ //
		var message = document.getElementById("nogeolocation"); // variable for kessage 
		var message2 = document.getElementById("nogeolocation2"); // variable for kessage 

		if (navigator.geolocation) { // If accesss to geolocation
			navigator.geolocation.getCurrentPosition(showPosition); // Use get current position with function and argument
		} else { // Else
			message.innerHTML = "Geolocation is not supported by this browser."; // Show message
			message2.innerHTML = "Geolocation is not supported by this browser.";} // Show message

		function showPosition(position) { // Get position function

			var markerCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // Co-ordinates for marker

			var userIcon = new google.maps.Marker({ // New marker
			position: markerCenter, // Position for marker
			icon: 'images/icons/user-marker.png' // Image for con	
			});

			marker.setMap(map); // Set marker to map
			marker2.setMap(map2); // Set marker to map

			var infowindow2 = new google.maps.InfoWindow({ // New info window
				content:"You are here" // Content for window
			});
		
			
			google.maps.event.addListener(marker, 'click', function() { // Add listener for click on marker
				infowindow.open(map,marker); // Open info window
			}); 
			google.maps.event.addListener(marker2, 'click', function() { // Add listener for click on marker
				infowindow2.open(map2,marker2); // Open info window
			}); 

		} 
	}
});
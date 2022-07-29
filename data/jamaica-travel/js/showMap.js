$(document).ready(function () {
	
	// Map will display location and infor window for company
	// User will be used for access to gealocation. If granted, use function
	
	// Function will get user latitude and longitude and show map as a marker
	
	'use strict';
	
	// ============================ MAP ============================ //
	var lat = 18.102700, long = -77.304650;
	var lat1 = 18.017874, long1 = -76.809906;
	var lat2 = 18.375110, long2 = -76.893270;
	var lat3 = 17.973789, long3 = -76.868698;
	var lat4 = 18.434610, long4 = -77.200050;
	var mapOptions = { // Variable for map options
		center: new google.maps.LatLng(lat, long), // Co-ordinates for company to centered on map
		mapTypeControl: true, // Control for map
		zoom: 9, // Zoom level
		viewMapControl: true, 
		streetViewControl: true, // Street view control
		panControl: true,
		zoomControl: true,
		scaleControl: true,
		streetViewControl: true,
		overviewMapControl: true,
		rotateControl: true 
	};
	
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); // Variable for new map. Set to id with map options	
	
	// ============================ MARKER ============================ //
	var hardRock = new google.maps.LatLng(lat1, long1); // Co-ordinates for marker
	var table = new google.maps.LatLng(lat2, long2); // Co-ordinates for marker
	var regency = new google.maps.LatLng(lat3, long3); // Co-ordinates for marker
	var gallery = new google.maps.LatLng(lat4, long4); // Co-ordinates for marker
	var marker = new google.maps.Marker({ // New marker
  		position: hardRock // Position for marker
	});
	var marker2 = new google.maps.Marker({ // New marker
  		position: table // Position for marker
	});
	var marker3 = new google.maps.Marker({ // New marker
  		position: regency, // Position for marker
	});
	var marker4 = new google.maps.Marker({ // New marker
  		position: gallery, // Position for marker
	});
	marker.setMap(map); // Set marker to map
	marker2.setMap(map); // Set marker to map
	marker3.setMap(map); // Set marker to map
	marker4.setMap(map); // Set marker to map
	
	// ============================ INFO WINDOW ============================ //
	var infowindow1 = new google.maps.InfoWindow({  // New info window
	  content:"<p><b>Kingston</b></p><br><p>The caital</p>" // Content for window
	});
	
	var infowindow2 = new google.maps.InfoWindow({  // New info window
	  content:"<p><b>Saint Mary</b></p>" // Content for window
	});
	
	var infowindow3 = new google.maps.InfoWindow({  // New info window
	  content:"<p><b>Portmore</b></p>" // Content for window
	});
	
	var infowindow4 = new google.maps.InfoWindow({  // New info window
	  content:"<p><b>Saint Ann</b></p>" // Content for window
	});
	
	infowindow1.open(map,marker); // Open info window
	infowindow2.open(map,marker2); // Open info window
	infowindow3.open(map,marker3); // Open info window
	infowindow4.open(map,marker4); // Open info window
	
	
	// ============================ GEOLOCATION ============================ //
	var message = document.getElementById("nogeolocation"); // variable for kessage 
	
	if (navigator.geolocation) { // If accesss to geolocation
		navigator.geolocation.getCurrentPosition(showPosition); // Use get current position with function and argument
	} else { // Else
		message.innerHTML = "Geolocation is not supported by this browser."; // Show message
	}
				  
	function showPosition(position) { // Get position function
		
		var markerCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // Co-ordinates for marker
		
		var marker3 = new google.maps.Marker({ // New marker
  		position: markerCenter, // Position for marker
		icon: 'images/icons/user-marker.png' // Image for con	
		});

		marker3.setMap(map); // Set marker to map
		
		var infowindow = new google.maps.InfoWindow({ // New info window
			content:"You are here" // Content for window
		});
		infowindow.open(map,marker2); // Open marker
		
	} 

	google.maps.event.addListener(marker, 'click', function() { // Add listener for click on marker
		infowindow1.open(map,marker); // Open info window
	});
	
	google.maps.event.addListener(marker2, 'click', function() { // Add listener for click on marker
		infowindow2.open(map,marker2); // Open info window
	}); 
	
	google.maps.event.addListener(marker3, 'click', function() { // Add listener for click on marker
		infowindow3.open(map,marker3); // Open info window
	}); 
	
	google.maps.event.addListener(marker4, 'click', function() { // Add listener for click on marker
		infowindow4.open(map,marker4); // Open info window
	}); 

});
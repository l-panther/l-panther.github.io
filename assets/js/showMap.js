$(document).ready(function () {
	
	// Map will display location and infor window for company
	// User will be used for access to gealocation. If granted, use function
	
	// Function will get user latitude and longitude and show map as a marker
	
	// ============================ MAP ============================ //
	var message = document.getElementById("nogeolocation"); // variable for kessage 
	var lat = 51.800200, long = -0.126400;
	var lat1 = 51.503900, long1 = -0.149100;
	var lat2 = 51.505520, long2 = -0.099820;
	var lat3 = 51.494030, long3 = -0.132250;
	var lat4 = 51.529950, long4 = -0.054390;
	var mapOptions = { // Variable for map options
		center: new google.maps.LatLng(lat, long), // Co-ordinates for company to centered on map
		mapTypeControl: true, // Control for map
		zoom: 13, // Zoom level
		viewMapControl: true, 
		streetViewControl: true, // Street view control
		panControl: true,
		zoomControl: true,
		scaleControl: true,
		overviewMapControl: true,
		rotateControl: true,
	};
	
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
  		position: gallery // Position for marker
	});
	
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
	marker.setMap(map); // Set marker to map
	marker2.setMap(map); // Set marker to map
	marker3.setMap(map); // Set marker to map
	marker4.setMap(map); // Set marker to map
	
	// ============================ INFO WINDOW ============================ //
	let infowindow1 = new google.maps.InfoWindow({  // New info window
	  content:"<h4><b>Hard Rock Cafe</b></h4><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star grey'></i>" // Content for window
	}),
	infowindow2 = new google.maps.InfoWindow({  // New info window
	  content:"<h4><b>The Table Cafe</b></h4><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'><i class='fa fa-star grey'></i>" // Content for window
	}),
	infowindow3 = new google.maps.InfoWindow({  // New info window
	  content:"<h4><b>Regency Cafe</b></h4><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star grey'></i><i class='fa fa-star grey'></i>" // Content for window
	}),
		infowindow4 = new google.maps.InfoWindow({  // New info window
	  content:"<h4><b>The Gallery Cafe</b></h4><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star grey'></i>" // Content for window
	});
	
	// Variable for new map. Set to id with map options	
	infowindow1.open(map,marker); // Open info window
	infowindow2.open(map,marker2); // Open info window
	infowindow3.open(map,marker3); // Open info window
	infowindow4.open(map,marker4); // Open info window
	
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
		infowindow5.open(map,marker5); // Open info window
	}); 
	} 

	
});
$(document).ready(function () {
	
	// Map will display location and infor window for company
	// User will be used for access to gealocation. If granted, use function
	
	// Function will get user latitude and longitude and show map as a marker
	
	'use strict';
	
	
	// ============================ MAP ============================ //
	let page = window.location.href,
		pos = page.indexOf("places");
		
	try {
		if(pos) {
			let message = document.getElementById("nogeolocation"),
			lat = 52.500149, 
			long = -0.126240,
			mapOptions = { // Variable for map options
				center: new google.maps.LatLng(lat, long), // Co-ordinates for company to centered on map
				mapTypeControl: true, // Control for map
				zoom: 11, // Zoom level
				viewMapControl: true, 
				streetViewControl: true, // Street view control
				panControl: true,
				zoomControl: true,
				scaleControl: true,
				streetViewControl: true,
				overviewMapControl: true,
				rotateControl: true 
			};

			// ============================ MARKER ============================ //
			let zoo = new google.maps.LatLng(51.527610, -0.153710),
				tour = new google.maps.LatLng(51.496960, -0.144870),
				eye = new google.maps.LatLng(51.500830, -0.122050),
				aquarium = new google.maps.LatLng(51.526530, -0.083680),
				museum = new google.maps.LatLng(51.482660, -0.005200); // Co-ordinates for marker

			// Markers
			let zooMarker = new google.maps.Marker({ // New marker
					position: zoo // Position for marker
				}),
				tourMarker = new google.maps.Marker({ // New marker
					position: tour // Position for marker
				}),
				eyeMarker = new google.maps.Marker({ // New marker
					position: eye // Position for marker
				}), 
				aquariumMarker = new google.maps.Marker({ // New marker
					position: aquarium // Position for marker
				}),
				museumMarker = new google.maps.Marker({ // New marker
					position: museum // Position for marker
				});

			// ============================ INFO WINDOW ============================ //
			let infowindow1 = new google.maps.InfoWindow({  // New info window
				content:"<p><b>London Zoo</b></p><br><p>The home of amazing animals</p><br><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" // Content for window
			}),
			infowindow2 = new google.maps.InfoWindow({  // New info window
				content:"<p><b>Bus Tour</b></p><br><p>Explore the city and see the sights</p><br><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" // Content for window
			}),
			infowindow3 = new google.maps.InfoWindow({  // New info window
				content:"<p><b>London Eye</b></p><br><p>Enjoy the ride and admire the view</p><br><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" // Content for window
			}),
			infowindow4 = new google.maps.InfoWindow({  // New info window
			 content:"<p><b>London Aquaruium</b></p><br><p>A world of sea creatures to explore</p><br><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" // Content for window
			}),
			infowindow5 = new google.maps.InfoWindow({  // New info window
				content:"<p><b>National Maritime Museum</b></p><br><p>Learn the culture and the history</p><br><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" // Content for window
			});

		   // Set marker to map
			map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); // Variable for new map. Set to id with map options	
			zooMarker.setMap(map); 
			tourMarker.setMap(map); 
			eyeMarker.setMap(map); 
			aquariumMarker.setMap(map); 
			museumMarker.setMap(map); 

			infowindow1.open(map,zooMarker); // Open info window
			infowindow2.open(map,tourMarker); // Open info window
			infowindow3.open(map,eyeMarker); // Open info window
			infowindow4.open(map,aquariumMarker); // Open info window
			infowindow5.open(map,museumMarker); // Open info window

			// ============================ GEOLOCATION ============================ //

			if (navigator.geolocation) { // If accesss to geolocation
				navigator.geolocation.getCurrentPosition(showPosition); // Use get current position with function and argument
			} else { // Else
				message.innerHTML = "Geolocation is not supported by this browser."; // Show message
			}

			// Add listener for click on marker to open info window
			google.maps.event.addListener(zooMarker, 'click', function() { 
			});	
			google.maps.event.addListener(tourMarker, 'click', function() { 
				infowindow2.open(map,tourMarker); 
			});	
			google.maps.event.addListener(eyeMarker, 'click', function() { 
				infowindow3.open(map,eyeMarker); 
			});	
			google.maps.event.addListener(aquariumMarker, 'click', function() { 
				infowindow4.open(map,aquariumMarker); 
			});	
			google.maps.event.addListener(museumMarker, 'click', function() { 
				infowindow5.open(map,museumMarker); 
			});

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

		}
	}
	catch(err) {
		console.log(err.message);
	}

});
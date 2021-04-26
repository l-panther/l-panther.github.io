$(document).ready(function() {
	
	$("#openSidenav").click(function () {
		$(".w3-sidenav").toggle();
	});
	
	$("#closeSidenav").click(function() {
		$(".w3-sidenav").hide();
	});
	
	function w3_open() {
	  $(".w3-sidenav")[0].toggle();
	}

	function w3_close() {
	  document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
	}
	
});
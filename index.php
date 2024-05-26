<?php

// Include the application configuration settings
require_once 'includes/config.inc.php';

// Include the function definitions
require_once 'includes/functions.inc.php';

// Include the requisite language file
require 'language/'. $config['language'] .'.php';

$page;
if (!isset($_GET['page'])) {
        $page = "home";
} else {
	$page = $_GET['page'];
}
?>
<!doctype html><!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]--><!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><![endif]--><!--[if IE 8]><html class="no-js lt-ie9"><![endif]--><!--[if gt IE 8]><!-->
<html lang=en-GB><!--<![endif]-->
<head>
  
	<meta charset="UTF-8"> <!-- Encoder -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Responsive -->
  <title>Slade Garden | Adventure Playground</title> <!-- Title -->
  <link rel="icon" href="assets/images/logo/logo.ico">
	
  <!-- Site details and author -->
	<meta name="description" content="Advertising professional Hairdresser services"> <!-- Description -->
	<meta name="keywords" content="Professional Hairdresser, London Hairdresser,Relaxer,Remy hair,Bridal,Parees Taylor"> <!-- Keywords -->
	<meta name="author" content="Leroy Russsell"> <!-- Author -->
	
	<!-- CSS -->

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

 	<link rel="stylesheet" href="assets/css/w3.css"> <!-- My CSS -->
	<link rel="stylesheet" href="assets/css/normalize.css"> <!-- My CSS -->
	<link rel="stylesheet" href="assets/css/styles.css"> <!-- My CSS -->
</head>
<body>

   <?php include 'templates/navigation.html'; ?>


  <?php
switch ($page) {
	case 'home' :
    include 'views/home.php';
    break;

	case 'about-us' :
    include 'views/about.php';
    break;
	case 'community-hub' :
    include 'views/community.php';
    break;
	case 'get-involved' :
    include 'views/involved.php';
    break;
	case 'venue-hire' :
    include 'views/hire.php';
    break;
	case 'contact-us' :
    include 'views/contact.php';
    break;
	default :
	  include 'views/404.php';
}


   include 'templates/footer.html';
 ?>

</div>


<style>
  #menuBtn { display: block;}

  @media screen and (min-width: 992px) {
    #menuBtn { display: none }
  }
</style>
<script src=
        "https://code.jquery.com/jquery-1.11.1.min.js">
    </script>

    
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
 
  <!-- JS Files -->

 <!-- <script src="assets/js/contactForm.js"></script> --> <!-- Show cafes -->
  <script>
    var currentDate = new Date();
    $("#currentDate").html(currentDate.getFullYear());
  </script>
  </body>
</html>
<?php
include 'includes/session-start.php'; # Initiate session.
require_once 'includes/functions.php'; # Functions.
include 'includes/header.php'; # HTML head.
$bannerId = "adminBanner"; # ID name for element.
$bannerName = "Administrator"; # Banner text.
if(isSession("adminName")) { # If session exists
	
    // HTML main content.
	$userName = ucfirst($_SESSION["adminName"]); # Assign name for user.
    echo '  
            <!-- Main content -->
            <main role="main">
    ';
    
    include 'includes/admin-main.php'; # Display main content.
    include 'includes/footer2.php'; # Display footer.
    
} else { # Else if name des not exist, display form.
     
    include 'includes/admin-login.php'; # Display admin login form.
}
?>
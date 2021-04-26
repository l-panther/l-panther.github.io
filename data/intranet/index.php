<?php
include 'includes/session-start.php';
require_once 'includes/functions.php'; # Functions.
require_once 'includes/scripts.html'; # Scripts.
include 'includes/header.php'; # HTML Head.
include 'includes/primarynav.php'; # Primary navigation.
if(isset($_GET['loggedout'])) { # If logout is set
    include 'includes/secure.php'; # Display secure.
    include 'includes/index-main.php'; # Display index main content. 
} else { # Else
    include 'includes/index-main.php'; # Display index main content. 
}
?>

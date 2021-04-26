<?php
include 'includes/session-start.php';
$_SESSION = array(); # Empty global array.
if (ini_get("session.use_cookies")) { # If cookies are used empty all assosiated values.
	$yesterday = time() - (24 * 60 * 60);     
	$params = session_get_cookie_params();     
	setcookie(session_name(), '', $yesterday,         
	$params["path"], $params["domain"],         
	$params["secure"], $params["httponly"]); 
} 
session_unset(); # Remove content
session_destroy(); # Destroy session.
header("Location: index.php?loggedout=You are logged out"); # Refresh page to index.
?>
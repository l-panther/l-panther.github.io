<?php

if(isset($_GET['loggedout'])) { // If logged out string is set
	$logged = "You are logged out"; // Set string
} else { // Else 
	$logged = "You are logged in"; // Set string
}
?>

			<!-- Log out status -->
            <div id="loggedOut">
                <p><?php echo $logged; ?></p>
            </div> <!-- End logged out status -->
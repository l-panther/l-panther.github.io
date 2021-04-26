<?php
include 'includes/session-start.php'; # Initiate session.
require_once 'includes/functions.php'; # Functions.
include 'includes/header.php'; # HTML head.
$bannerId = "adminBanner"; # ID name for element.
$bannerName = "Administrator"; # Banner text.

$userName = ""; # Name of user.
if(isSession("adminName")) { # If sesson exists.
    $userName = ucfirst($_SESSION["adminName"]); # Assign name for user.
    include 'includes/admin-banner.php'; # Banner.
    include 'includes/user-logged.php'; # Display user. 
	echo '  
			<!-- Main content -->
			<main role="main" class="main-content">
				';
    include 'includes/add-staff.php'; # Display add staff form. 
	include 'includes/admin-nav-mini.php';
    include 'includes/admin-nav.php';
                    
	echo '
				</div> <!-- End section -->
            </main> <!-- End main -->
        </div> <!-- End page -->
    </body> <!-- End body -->
</html> <!-- End html -->';
} else { # Else if name does not exist, display form.
    include 'includes/admin-login.php'; # Display admin login form.
    include 'includes/footer.php'; # Footer.
}
?>
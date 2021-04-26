<?php
include 'includes/session-start.php'; # Initiate session.
require_once 'includes/functions.php'; # Functions.
include 'includes/header.php'; # HTML header.navigation.
$bannerId = "intranetBanner"; # ID name for element.
$bannerName = "Intranet"; # Banner text.
include 'includes/intranet-banner2.php'; # Banner.
$name = ""; # Variable for user name.
if(isSession("adminName")) { # If admin name exist in global array, show content.
    $name = $_SESSION["adminName"]; # Name for user.
    echo '    
            <!-- Main content -->
            <main role="main" class="w3-large">';
    include 'includes/user-logged.php'; # Display user. 
    $module = "Problem Solving for Programming"; # Module name.
	echo '
				<section class="account-main"> 
			';
    include 'includes/breadcrumbs.php'; # Display breadcrumb.
    include 'includes/pfpresults.php'; # Display Problem Solving results.
    echo '      
            	</section> <!-- End section -->
              </main> <!-- End main -->
        </div> <!-- End page -->
    </body> <!-- End body -->
</html> <!-- End html -->';
    
} else if(isSession("staffName")) { # Else if staff name exist in global array, show content.
    $name = $_SESSION["staffName"]; # Name for user.
    echo '    
            <!-- Main content -->
            <main role="main" class="w3-large">';
    include 'includes/user-logged.php';  # Display user.
    $module = "Problem Solving for Programming"; # Module name.
	echo '
				<section class="w3-container account-main"> 
			';
    include 'includes/breadcrumbs.php'; # Display breadcrumb.
    include 'includes/pfpresults.php'; # Display Problem Solving results.
    echo '      
            	</section> <!-- End section -->
        	</main> <!-- End main -->
        </div> <!-- End page -->
    </body> <!-- End body -->
</html> <!-- End html -->';
} else if(!isset($_SESSION["adminName"])){ # Else if name does not exist, display form.
    include 'includes/staff-login.php';  # Else if name does not exist, display form.
    include 'includes/footer.php'; # Footer.
}
?>
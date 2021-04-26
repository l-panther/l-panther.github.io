<?php
include 'includes/session-start.php'; # Initiate session.
require_once 'includes/functions.php'; # Functions.
include 'includes/header.php'; # HTML header.
$bannerId = "intranetBanner"; # ID name for element.
$bannerName = "Intranet"; # Banner text.
include 'includes/intranet-banner2.php'; # Banner.
$name = ""; # Variable for user name.
if(isSession("adminName")) { # If admin name exist in global array .
    $name = $_SESSION["adminName"]; # Name for user.
    echo '    
            <!-- Main content -->
            <main role="main" class="w3-large">';
    include 'includes/user-logged.php'; # Display user.
    $module = "Introduction to Database Technology"; # Module name.
	echo '
				<section class="account-main"> 
			';
    include 'includes/breadcrumbs.php'; # Display breadcrumb.
    include 'includes/dtresults.php'; # Display Database results.
    echo '      
                </section> <!-- End section -->
            </main> <!-- End main -->
        </div> <!-- End page -->
    </body> <!-- End body -->
</html> <!-- End html -->';
    
} else if(isSession("staffName")) { # If staff exists in global array, display results.
    $name = $_SESSION["staffName"]; # Name for login.
    echo '    
            <!-- Main content -->
            <main role="main" class="w3-large">';
    include 'includes/user-logged.php';  # Display user.
    $module = "Introduction to Database Technology"; # Module name.
	echo '
				<section class="w3-container account-main"> 
			';
    include 'includes/breadcrumbs.php'; # Display breadcrumb.
    include 'includes/dtresults.php'; # Display Problem Solving results.
    echo '      
            	</section> <!-- End section -->
        	</main> <!-- End main -->
        </div> <!-- End page -->
    </body> <!-- End body -->
</html> <!-- End html -->
';
} else if(!isset($_SESSION["adminName"])){ # Else if server name is not stored display form.
    include 'includes/staff-login.php'; # Display staff login form.
    include 'includes/footer.php'; # Footer.
}
?>
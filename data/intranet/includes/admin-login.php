<?php
/* ======================================================= ASSIGN VARIABLES ======================================================= */
$clean = $error = array(); # Array for clean and error data.
$errors_detected = false; # Boolean for errors detected.
$errorMsg = $adminName = $adminPassword = $adminNameErr = $adminPasswordErr = $output = $status = $loggedout = ""; # Variables for form, errors and output.
$adminself = htmlentities($_SERVER['PHP_SELF']); # Variable for form self.
$form_is_submitted = form_submitted("adminlogin"); # Variable for form submitted.

/* ======================================================= IF FORM SUBMITTED, CHECK FOR ERROR  ======================================================= */
if($form_is_submitted) { # If form is submitted.
    $errors_detected = checkAdminForm("adminName", "adminPassword"); # Check for errors.
}

/* ======================================================= IF FORM SUBMITTED AND NO ERRORS   ======================================================= */
if($form_is_submitted === true && $errors_detected === false) { # If form is submitted and no errors, display admin home page.
    $adminName = getClean('adminName'); # Get clean name.
	
	$bannerId = "adminBanner"; # ID name for element.
	$bannerName = "Administrator"; # Banner text.
	
    $_SESSION["adminName"] = $adminName; # Assign name to global array.
    $userName = ucfirst($_SESSION["adminName"]); # Name for user logged in.
	echo '           
			<!-- Main content -->
			<main role="main">
						';
  
    include 'includes/admin-main.php'; # Display admin home page.
 	include 'includes/footer2.php'; # Display footer.
} else { # Else.
    if($errors_detected === true) { # If errors are found, get data for form.
        $errorMsg = "Correct the highlighted errors!"; # Assign error message.
        $adminName = getClean("adminName"); # Get clean name.
        $adminPassword = getClean("adminPassword"); # Get clean password.
        $adminNameErr = getError("adminName"); # Get error message.
        $adminPasswordErr = getError("adminPassword"); # Get error message.
}
    # Form outout.
    $output .=  ' 
			<!-- Banner -->
            <div id="adminBanner" class="w3-row w3-small banner">
                <h2>Administrator</h2>
     
				<!-- Intranet link -->
				<div  class="w3-center" id="intranet-link">
					<a href="staff_login.php" title="Connect to the Intranet"><i class="w3-large  w3-center w3-hide-large w3-block fa fa-external-link"></i><p class="w3-hide-small w3-hide-medium">Intrnaet</p></a>
				</div> <!-- End intranet link -->
					
			</div> <!-- End banner -->
			
            <!-- Main content -->
            <main role="main" class="w3-lightgrey main-content">
                
                <!-- Breadcrumb -->
                <div id="breadcrumb">
                    <p><a href="index.php">Home</a> &rtrif;<span class="current">Administrator</span></p>
                </div> <!-- End breadcrumb -->

                <!-- Administrator Login Form -->
                <form role="form" id="adminform" action="' . $adminself . '" method="post">
                    <fieldset id="fieldset_admin">
                    
                        <legend>Sign In</legend>
                        
						<!-- Username -->
						<div class="w3-row w3-section">
							<label for="adminName" class="w3-col w3-hide-small"> Username</label>
							<div class="w3-rest">
							  <input aria-required="true" class="w3-input" value="' . $adminName . '" name="adminName" type="text" id="adminName" placeholder="Enter username">
							  <span class="error_text">' . $adminNameErr . '</span>
							</div>
						</div> <!-- End username-->

						<!-- Password -->
						<div class="w3-row w3-section">
							<label for="adminPassword" class="w3-col w3-hide-small">Password</label>
							<div class="w3-rest">
							  <input aria-required="true" class="w3-input" value="' . $adminPassword . '" name="adminPassword" type="password" id="adminPassword" placeholder="Enter password">
							  <span class="error_text">' . $adminPasswordErr . '</span>
							</div>
						</div> <!-- End password -->
				
                        <!-- Login button -->
                        <div class="submit-button" >
                            <input class="w3-block" id="adminLogin" type="submit" name="adminlogin" value="Log in"/>
                        </div>

                    </fieldset> <!-- End fieldset-->
                </form> <!-- End form -->
             </main> <!-- End main -->
        </div> <!-- End page -->
    </body> <!-- End body -->
</html> <!-- End html -->
';
}
echo $output; # Echo output 
?>
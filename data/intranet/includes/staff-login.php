<?php
$clean = $error = array(); # Arrays for clean and error data.
$errors_detected = $found = false; # Variable for error detected.
$errorMsg = $staffName = $staffPassword = $staffNameErr = $staffPasswordErr = $output = $loggedout = ""; # Variables for form fields, errors and output.
$registerself = htmlentities($_SERVER['PHP_SELF']); # Variable for form self.
$form_is_submitted = form_submitted("stafflogin"); # Boolean for form submitted.

if($form_is_submitted) { # If form is submitted
    $errors_detected = checkIntranetLogin("staffName", "staffPassword"); # Get errors.
}

if($errors_detected == false) {
	$staffName = getClean("staffName"); # Get clean name.
	$staffPassword = getClean("staffPassword"); # Get clean name.
	
	// $found = checkline($staffName, $staffPassword);
}

if($form_is_submitted === true && $errors_detected == false) { # If submitted and no errors.
    $staffName = getClean("staffName"); # Get clean name.
    $_SESSION["staffName"] = $staffName; # Assign name to global array.
    $name = $_SESSION["staffName"]; # Name for user.
	$loggedin = "You are logged in"; # Message.
    include 'includes/secure.php'; # Display secure
    echo '      
				<style>#breadcrumb, #footer {display: none;}</style>                  
				<!-- Main content -->
				<main role="main" class="w3-large account-main">
    ';
    include 'includes/user-logged.php'; # Display user logged in.
    include 'includes/staff-main.php'; # Display intranet home page.
    echo '            
			 </main> <!-- End main -->
        </div> <!-- End page -->
    </body> <!-- End body -->
</html> <!-- End html -->';
} else {
    if($errors_detected === true) { # If errors found
        $errorMsg = "Correct the highlighted errors!"; # Assign error message.
        $staffName = getClean("staffName"); # Get clean name.
        $staffPassword = getClean("staffPassword"); # Get clean password.
        $staffNameErr = getError("staffName"); # Get error message for name.
        $staffPasswordErr = getError("staffPassword"); # Get error message for password.
}
    # Form outout.
    $output .=  '
			<!-- Banner -->
            <div id="intranetBanner" class="w3-row banner">
                <h2 class="w3-col l9 m8 s7">Intranet</h2>
				
				<a href="admin.php" title="Admin" class="w3-right w3-margin-top w3-margin-right w3-text-white w3-xlarge"><span class="w3-hide-large"><i class="fa fa-user"></i></span><span class="w3-hide-small w3-hide-medium w3-large">Administrator</span></a>
					
			</div> <!-- End banner -->
			
			 <!-- Main content -->
            <main role="main" class="w3-lightgrey main-content">
            
                <!-- breadcrumbs -->
                <div id="breadcrumb2">
                    <p><a href="index.php">Home</a> &rtrif;<span class="current">Intranet</span></p>
                </div> <!-- End breadcrumb -->

                <!-- Intranet Login Form -->
                <form role="form" id="staffform" action="' . $registerself . '" method="post">
                    <fieldset id="fieldset_admin">

                        <legend>Sign In</legend>
                         
						<!-- Username -->
						<div class="w3-row w3-section">
							<label for="staffName" class="w3-col"> Username</label>
							<div class="w3-rest">
							  <input aria-required="true" required="required" class="w3-input" value="' . $staffName . '" name="staffName" type="text" id="staffName" placeholder="Username">
							  <span class="error_text">' . $staffNameErr . '</span>
							</div>
						</div> <!-- End username -->

						<!-- Password -->
						<div class="w3-row w3-section">
							<label for="staffPassword" class="w3-col"> Password</label>
							<div class="w3-rest">
							  <input aria-required="true" required="required" class="w3-input" value="' . $staffPassword . '" name="staffPassword" type="password" id="staffPassword" placeholder="Password">
							  <span class="error_text">' . $staffPasswordErr . '</span>
							</div>
						</div> <!-- End password -->

                        <!-- Login button -->
                        <div class="submit-button" >
                            <input class="w3-block" id="stafflogin" type="submit" name="stafflogin" value="Log in"/>
                        </div> <!-- End login button -->

                    </fieldset> <!-- End fieldset -->
                </form> <!-- End form -->
            </main> <!-- End main -->
        </div> <!-- End page -->
    </body> <!-- End body -->
</html> <!-- End html -->
';
}
echo $output;
?>

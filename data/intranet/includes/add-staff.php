<?php
/* ======================================================= ASSIGN VARIABLES ======================================================= */
$clean = $error = array(); # Array for clean and error data.
$errors_detected = false; # Boolean for errors detected.
$messageErr = $title = $firstname = $lastname = $email = $username = $password = $titleErr = $firstnameErr = $lastnameErr = $emailErr = $usernameErr = $passwordErr = $popupMessage = $output = ""; # Variables for form and errors.
$popupTitle = "Yo";
$registerself = htmlentities($_SERVER['PHP_SELF']); # Variable for form self.
$form_is_submitted = form_submitted("addstaff"); # Variable for form submitted.

/* ======================================================= IF FORM SUBMITTED, CHECK FOR ERROR  ======================================================= */
if($form_is_submitted) { # If form is submitted
    $errors_detected = checkAddStaff("title", "firstname", "lastname", "email", "username", "password"); # Check for errors.
}

/* ======================================================= IF FORM SUBMITTED AND NO ERRORS   ======================================================= */
if($form_is_submitted === true && $errors_detected === false) { # If form is submitted and no errors, get clean data, create file, text, open file, get data 
    // Clean data
    $title = getClean("title"); # Get clean name.
    $firstname = getClean("firstname"); # Get clean name.
    $lastname = getClean("lastname"); # Get clean name.
    $email = getClean("email"); # Get clean name.
    $username = getClean("username"); # Get clean name.
    $password = getClean("password"); # Get clean name.
    // File
    $file = "staff.txt"; # Variable for file name.
    $textToWrite = PHP_EOL . "Username: ".$username.", "."Password: ".$password.", "."Title: ".$title.", "."Firstname: ".$firstname .", "."Lastname: ".$lastname .", "."Email: ".$email; # Text to write to file, containing form data.
	
	$found =  checkline($textToWrite);
	
	if($found) {
		echo "
			<style>
				#popup-confirm { 
					display: block;
					color: white;
					background: #ff3333; }
			</style>
			";

			$popupTitle = "Unsuccessful"; # Message.
			if($_SERVER["NameErr"] != "") {
				$errorName = $_SERVER["NameErr"] . "."; # Popup title.
				$popupMessage = $errorName; # Popup message.
			}
			if($_SERVER["EmailErr"] != "") {
				$errorEmail = $_SERVER["EmailErr"] . "."; # Popup title.
				$popupMessage = $errorEmail; # Popup message.
			}
			if ($_SERVER["NameErr"] != "" && $_SERVER["EmailErr"] != "") {
				$popupMessage = $errorName . "<br>" . $errorEmail; # Popup message.
			}
				

	} else {
		$data = writeToFile($file, $textToWrite); # Check exists and writable, open file and check if data exist.
		if($data) { # If data exist on file.
			echo "
			<style>
				#popup-confirm { 
					display: block;
					color: black;
					background: #a0fea0; }
			</style>
			";
			$popupTitle = "Success!"; # Popup title.
			$popupMessage = "Staff added successfully"; # Popup message.
			
			$firstname = ""; # Get clean name.
			$lastname = ""; # Get clean name.
			$email = ""; # Get clean name.
			$username = ""; # Get clean name.
			$password = ""; # Get clean name.
			
		} else {
			echo "
			<style>
				#popup-confirm { 
					display: block;
					color: white;
					background: #ff3333; }
			</style>
			";

			$popupTitle = "Error"; # Popup title.
			$popupMessage = "Error writting to file."; # Popup message.
		}
	}
} else { # Else
    if($errors_detected === true) { # If errors were detected, get clean data, error data for form and create message.
        // Message
        $messageErr = "Correct the highlighted errors"; # Store string in error message.
        // Get clean data
        $title = getClean("title"); # Get clean data for title.
        $firstname = getClean("firstname"); # Get clean data for first name.
        $lastname = getClean("lastname"); # Get clean data for surname.
        $email = getClean("email"); # Get clean data for email.
        $username = getClean("username"); # Get clean data forusername.
        $password = getClean("password"); # Get clean data for password.
        // Get error data
        $titleErr = getError("title"); # Get error data for title
        $firstnameErr = getError("firstname"); # Get error data for first name.
        $lastnameErr = getError("lastname"); # Get error data for surname.
        $emailErr = getError("email"); # Get error data for email.
        $usernameErr = getError("username"); # Get error data for username.
        $passwordErr = getError("password"); # Get error data for password.
    }  
}

    # Output for page    
    $output = '
                        <!-- Back navigation -->
						<div id="backnav">
							<!-- Back button-->
							<a href="admin.php" title="Go back" class="w3-hide-small">Home</a>
							<a href="admin.php" title="Go back" class="w3-hide-medium w3-hide-large"><i class="w3-text-white fa fa-home"></i></a>   
						</div> <!-- End back navigation -->

                        <!-- Introduction-->	
                        <!-- Title-->
                        <h2><b>Add Staff</b></h2>
						
						<!-- Confirm dialog -->
						<div class="w3-panel" id="popup-confirm"> 
							<span onclick="w3.hide(\'#popup-confirm\')" class="w3-right w3-closebtn">x</span>
							<h3 class="w3-xlarge" id="panelTitle">' . $popupTitle . '</h3>
							<p class="w3-medium">' . $popupMessage . '</p>
							
						</div>

                        <!-- Form -->
                        <form role="form" id="register-form" action="' . $registerself . '" method="post">

                            <fieldset id="fieldset-register">

                                <legend id="legend-register">Enter staff details</legend>

                                <!-- Title Controlgroup -->
                                <div>
                                    <label for="title"> Title</label>
                                    <div>
                                        <select class="w3-select" name="title" id="title">
                                            <option value="0" class="w3-text-grey" disabled selected>Select title</option>
                                            <option value="Mr' . $title . '">Mr</option>
                                            <option value="Ms">Ms</option>
                                            <option value="Mrs">Mrs</option>
                                            <option value="Miss">Miss</option>
                                            
                                        </select>
                                        <span class="error_text">' . $titleErr . '</span>
                                    </div>
                                </div> <!-- End title controlgroup -->

                                <!-- First Name Controlgroup -->
                                <div>
                                    <label for="firstname"> First name</label>
                                    <div>
                                      <input class="w3-input" value="' . $firstname . '" name="firstname" type="text" id="firstname" placeholder="First name">
                                      <span class="error_text">' . $firstnameErr . '</span>
                                    </div>
                                </div> <!-- End first name controlgroup -->

                                <!-- Last Name Controlgroup -->
                                <div>
                                    <label for="lastname"> Last name</label>
                                    <div>
                                      <input class="w3-input" value="' . $lastname . '" name="lastname" type="text" id="lastname" placeholder="Last name">
                                      <span class="error_text">' . $lastnameErr . '</span>
                                    </div>
                                </div> <!-- End last name controlgroup -->

                                <!-- Email Controlgroup -->
                                <div >
                                    <label for="email"> Email</label>
                                    <div>
                                      <input class="w3-input" value="' . $email . '" name="email" type="text" id="email" placeholder="Email">
                                      <span class="error_text">' . $emailErr . '</span>
                                    </div>
                                </div> <!-- End email controlgroup -->

                                <!-- Username Controlgroup -->
                                <div>
                                    <label for="username"> Username</label>
                                    <div>
                                      <input class="w3-input" value="' . $username . '" name="username" type="text" id="username" placeholder="Username is \'staff\'">
                                      <span class="error_text">' . $usernameErr . '</span>
                                    </div>
                                </div> <!-- End username controlgroup -->

                                <!-- Password Controlgroup -->
                                <div>
                                    <label for="password" class="w3-col"> Password</label>
                                    <div>
                                      <input class="w3-input" value="' . $password . '" name="password" type="text" id="password" placeholder="Password is \'DCSstaff01\'">
                                      <span class="error_text">' . $passwordErr . '</span>
                                    </div>
                                </div> <!-- End password controlgroup -->

                                <!-- Submit button -->
                                <div class="w3-block submit-button">
                                    <input id="addstaff" type="submit" name="addstaff" value="Add staff" title="Add staff member to system" />
                                </div> <!-- End submit button -->

                            </fieldset> <!-- End fieldset -->
                        </form> <!-- End form -->

';
 # Close else
// return $output; # Echo output 
?>
<?php                                           
// ========================= CLEAN DATA =========================
function clean_data($data) {
/*  Trim white space, remove slashes and sanitise data.
    User input is required is required as argument.
    Return clean data. */
    
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

// ========================= GET CLEAN DATA =========================
function getClean($data) {
/*  If clean array has data set, sanitise name and assign to variable.
    User input is required as argument.
    Return name. */ 
    
    global $clean;
    if (isset($clean[$data])) {
        $name = clean_data($clean[$data]);
    } else { 
         $name = '';
    }   
    return $name;
}

// ========================= GET ERROR DATA =========================
function getError($data) {
/*  If error array has data set, sanitise name and assign to variable.
    User input is required as argument.
    Return name. */ 
    
    global $error;
    if (isset($error[$data])) {
        $data = $error[$data];
    } else {
        $data = '';
    }
    return $data;
}

// ========================= CHECK WRITE TO FILE =========================
function writeToFile($file, $textToWrite) {
/*  If file exists, file is writable
    While not end of file get line.
    If line contains first name, surname and password, return true.
    File name, text, first name, surname and password are required as argument.
    Return false. */
	
	$write = fopen($file, 'a');
    if(is_file($file) && is_writable($file)) {
   	
		$write = fwrite($write, $textToWrite);
		if ($write === false) {
			$_SERVER['Fail'] = "Data not written";
			return false;
		} else {
			return true;
		}
		fclose($write);   
	} else {
		$_SERVER['Error'] = "File error";
		return false;; # Display message
	}
}

// ========================= CHECK FILE LINE  =========================
function checkline($textToWrite) {
	$found = false;
	$file = "staff.txt";
	if(is_file($file) && is_readable($file)) {
		$read = fopen("staff.txt", 'r');
		
		while(!feof($read)) {
			$line = fgets($read, 1024);
			$toCheck = explode(",", $line);
			$toWrite = explode(",", $textToWrite);

			if($toCheck[3] == $toWrite[3] && $toCheck[4] == $toWrite[4]) { 
				$_SERVER['NameErr'] = "Name already stored";
				$found = true; 
			} 
			if($toCheck[5] == $toWrite[5]) { 
				$_SERVER['EmailErr'] = "Email already stored";
				$found = true; 
			} 	
			
		} 
		fclose($read);
	} else {
		$_SERVER['Error'] = "Error no file";
	}
	return $found;
}

// ========================= READ FILE =========================
function readStaffFile() {
	$exists = false;
	$file = "staff.txt";
	$output = "";
	$count = 0;
	if(is_file($file) && is_readable($file)) {
		$exists = true;
		$read = fopen($file, 'r');
		
		$output .= "
				<!-- Article 1 -->
				<div class='w3-responsive'>
				<table class='w3-table w3-striped' id='staff-table'>
					<caption>List employees</caption>
						<tr class='view-table-hd'>
							<th scope='col' style='width: 40px'>ID</th>
							<th scope='col' style='width:170px'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'></th>
						</tr>";
		while(!feof($read)) {
			
			$line = fgets($read, 1024);
			$staff = explode(",", $line);
			
			$staff['username'] = $staff[0];
			$staff['password'] = $staff[1];
			$staff['firstname'] = $staff[3];
			$staff['lastname'] = $staff[4];
			$staff['email'] = $staff[5];
			$staffFname = explode(":", $staff['firstname']);
			$staffLname = explode(":", $staff['lastname']);
			$staffEmail = explode(":", $staff['email']);

			
			$count ++;
			$output .= "
						
						
							<tr class='view-staff'>
									<td>$count</td>
									<td>$staffFname[1] $staffLname[1]</td>
									<td>$staffEmail[1]</td>
							</tr>
						";
			


		} 
		$output .= "</table>
					</div>
		";
        
		fclose($read);
		$staff = array($output, $count);
	} else {
		$_SERVER['Error'] = "Error no file";
	} return $staff;
	
}

// ========================= CHECK STAFF =========================
function checkstaff($username, $password) {
	$found = false;
	$file = "staff.txt";
	if(is_file($file) && is_readable($file)) {
		$read = fopen($file, 'r');
		while(!feof($read)) {
			$line = fgets($read, 1024);
			$toCheck = explode(",", $line);

			if($toCheck[0] == $username && $toCheck[1] == $password) { 
				$_SERVER['Exists'] = "Data exists";
				$found = true; 
			} 
		} 
		fclose($read);
	} else {
		$_SERVER['Error'] = "Error no file";
		$found = false;
	}
	return $found;
}

// ========================= CHECK SESSION =========================
function isSession($name) {
/*  If name is stored in global array, return true.
    User input for username form field is required as argument.
    Return false. */
    
    if(isset($_SESSION[$name])) { # If session name is stored
        return true;
    }
    return false;
}

// ========================= SUBMIT FORM =========================
function form_submitted($submitButton) {
/*  If a request has been made to post form and if name of submit button is set, set form submitted to true, else false.
    Name of submit button is required as argument.
    Return form submitted. */
    
	$form_submitted = false;
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST[$submitButton])) { 	
			$form_submitted = true;
        }
    }
	return $form_submitted;
}

// ========================= ADMIN FORM VALIDATION =========================
function validAdminName($username) { 
/* 	If name length is less than 2 chars or greater than 8 chars and not alpha, return false.
    User input for name field is required as arguement.
	Return true */
    
	if(!ctype_alpha($username) || strlen($username) != 5 ){
		return false;
    }
    if(!$username == "admin") {
        return false;
    }
	return true;
}

function validAdminPassword($password) { 
/*	Admin password is DCSadmin01.
    Dept = DCS, Type = admin, Int = 01.
    If dept is not at position 0, return false. 
    If type is not at position 3, return false. 
    If int is not at position 8, return false. 
    User input for password field is required as argument.
	Return true. */
	
	$dept = strpos($password, "DCS");
	$type = strpos($password, "admin");
	$int = strpos($password, "01");
	
	if (strlen($password) > 10) {
		return false;
	}
	if($dept !== 0) {
		return false;
	}
	if($type !== 3) {
		return false;
	}
	if($int !== 8) {
		return false;
	}
	
    return true;
}

// ========================= REGISTER FORM VALIDATION =========================
function validTitle($title) { 
/*	If title is not alpha and not equal to Mr or Mrs or Miss or Ms, return false.
    User input for title field is required as arguement.
	Return true. */
    
	if (!ctype_alpha($title)) {
			if ($title != "Mr" || $title != "Master" || $title != "Lord" || $title != "Ms" || $title != "Miss" || $title != "Mrs" || $title != "Lady") {

			return false;
		}
	}
	return true;
}

function validFirstname($firstname) { 
/*	If firstname is not alpha and length is less than 2 characters or greater than 20 characters, return false.
    User input for first name field is required as argument.
	Return true */
    
	if (!ctype_alpha($firstname) || strlen($firstname) < 2 || strlen($firstname) > 20) {
		return false;
	}
	return true;
}

function validSurname($surname) { 
/*	If surname is not alpha and length is less than 2 characters and greater than 20 characters, return false.
    User input for surname field is required as arguement.
	Return true */
    
	if (!ctype_alpha($surname) || strlen($surname) < 2 || strlen($surname) > 20) {
		return false;
	}
	return true;
}

function validEmail($email) {
/*	If email is not a valid email address, return false. 
    User input for email field is required as argument.
	Return true */
    
	if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
		return false;
	}
	return true;
}

function validUsername($username) { 
/*  If username is not alpha and length is less than 2 characters and greater than 20 characters, return false.
    User input for username field is required as argument.
	Return true */
	
	if(!ctype_alpha($username) || strlen($username) != 5 ){
		return false;
    }
    if($username != "staff") {
        return false;
    }
	return true;
}

function validStaffUsername($username) { 
/*  If username is not alpha and length is less than 2 characters and greater than 20 characters, return false.
    User input for username field is required as argument.
	Return true */
	
	if(!ctype_alpha($username) || strlen($username) != 5 ){
		return false;
    }
    if($username != "staff") {
        return false;
    }
	return true;
}

function validStaffPassword($password) { 
/*	Staff password is DCSstaff01.
    Dept = DCS, Type = admin, Int = 01 through to 10
    If dept is not at position 0, return false. 
    If type is not at position 3, return false. 
    If int is not at position 8, return false. 
    User input for password field is required as argument.
	Return true. */
    
	$dept = strpos($password, "DCS");
	$type = strpos($password, "staff");
	$int1 = strpos($password, "01");
	
	if (strlen($password) > 10) {
		return false;
	}
	if($dept !== 0) {
		return false;
	}
	if($type !== 3) {
		return false;
	}
	if ($int1 !== 8) {
		return false;
	} 
    return true;
}


// ========================= CHECK ADMIN FORM =========================
function checkAdminForm($username, $password) {
/*  If each field is empty, error detected is true, store error message in error array.
    If form fields are set, clean user data and validate 
    If clean data is valid, store data in clean array, Else error detected is true,  store error message in error array.
    Name of form fields (Username and Password) is required as arguments.
    Return error detected. */
    
    global $clean, $error, $errors_detected; 
    
    if(empty($_POST[$username])) { # Field 1
        $errors_detected = true;
        $error[$username] = 'Username is required';
    } else if(isset($_POST[$username])) { 
        $user = clean_data($_POST[$username]);
        if (validAdminName($user)) {
            $clean[$username] = $user;
        } else {
			$errors_detected = true;
			$error[$username] = 'Username is invalid';
        }
    }
    
    if(empty($_POST[$password])) { # Field 2
        $errors_detected = true;
        $error[$password] = 'Password is required';
    } else if(isset($_POST[$password])) {
        $pass  = clean_data($_POST[$password]);
        if(validAdminPassword($pass)) {
            $clean[$password] = $pass;
        } else {
            $errors_detected = true; 
            $error[$password] = 'Password is invalid';
        }
    }
    return $errors_detected;
}  


// ========================= CHECK REGISTRATION FORM  =========================
function checkAddStaff($title, $firstname, $lastname, $email, $username, $password) {
/*  If each field is empty, error detected is true, store error message in error array.
    If form fields are set, clean user data and validate 
    If clean data is valid, store data in clean array, Else error detected is true, store error message in error array.
    Title, Firstname, Surname, Email, Username and Password is required as arguements.
    Return error detected value. */
    
    global $clean, $error, $errors_detected; 
    
    if(empty($_POST[$title])) { # Title 1
        $errors_detected = true;
        $error[$title] = '* Title is required';
    } else if(isset($_POST[$title])) {
        $newtitle = clean_data($_POST[$title]);
		switch ($newtitle) {
			case "Mr":
				$newtitle = "Mr";
				break;
			case "Ms":
				$newtitle = "Ms";
				break;
			case "Mrs":
				$newtitle = "Mrs";
				break;
			case "Miss":
				$newtitle = "Miss";
				break;
			default:
				$newtitle = "0";
				$error[$title] = 'Title is required';
				break;
		}  
		
		if (validTitle($newtitle)) {
            $clean[$title] = $newtitle;
        } else {
            $errors_detected = true;
            $error[$title] = '* Title invalid';
        }
    }
    
    if(empty($_POST[$firstname])) { # Firstname 2
        $errors_detected = true;
        $error[$firstname] = 'First name is required';
    } else if(isset($_POST[$firstname])) { 
        $fname = clean_data($_POST[$firstname]);
        if (validFirstname($fname)) {
            $clean[$firstname] = $fname;
        } else {
            $errors_detected = true;
            $error[$firstname] = 'First name must be 2 - 20 letters';
        }
    }
    
    if(empty($_POST[$lastname])) { # Surname 3
        $errors_detected = true;
        $error[$lastname] = '* Last name is required';
    } else if(isset($_POST[$lastname])) {
        $lname = clean_data($_POST[$lastname]);
        if(validSurname($lname)) {
            $clean[$lastname] = $lname;
        } else {
            $errors_detected = true; 
            $error[$lastname] = "Lasst name must be 2 - 20 letters";
        }
    }  
    
    if(empty($_POST[$email])) { # Email 4
        $errors_detected = true;
        $error[$email] = '* Email is required';
    } else if(isset($_POST[$email])) { 
        $newemail = clean_data($_POST[$email]);
        if (validEmail($newemail)) {
            $clean[$email] = $newemail;
        } else {
            $errors_detected = true;
            $error[$email] = 'Email must be valid email address';
        }
    }
    
    if(empty($_POST[$username])) { # Username 5
        $errors_detected = true;
        $error[$username] = 'Username is required';
    } else if(isset($_POST[$username])) { 
		$newuser = clean_data($_POST[$username]);
        if (validUsername($newuser)) {
            $clean[$username] = $newuser;
        } else {
            $errors_detected = true;
            $error[$username] = "Username must be 8 letters";
        }
    }
    
    if(empty($_POST[$password])) { # Password 6
        $errors_detected = true;
        $error[$password] = '* Password is required';
    } else if(isset($_POST[$password])) {
        $pass = clean_data($_POST[$password]);
       if (validStaffPassword($pass)) {
			$clean[$password] = $pass;
		} else {
			$errors_detected = true; 
			$error[$password] = "Password is invalid";
		}
	}
    return $errors_detected;
}  

// ========================= CHECK STAFF FORM  =========================
function checkIntranetLogin($username, $password) {
/*  If each field is empty, error detected is true, store error message in error array.
    If form fields are set, clean user data and validate.
    If clean data is valid, store data in clean array, Else error detected is true,  store error message in error array.
    Name of form fields (Username and Password) is required as arguments.
    Return error detected. */
    global $clean, $error, $errors_detected;
    
	if(empty($_POST[$username])) { # Field 1
        $errors_detected = true;
        $error[$username] = 'Username is required';
    } else if(isset($_POST[$username])) { 
        $user  = clean_data($_POST[$username]);
        if (validStaffUsername($user)) {
            $clean[$username] = $user;
        } else {
        $errors_detected = true;
        $error[$username] = 'Username is invalid';
        }
    }
    
    if(empty($_POST[$password])) { # Field 2
        $errors_detected = true;
        $error[$password] = 'Password is required';
    } else if(isset($_POST[$password])) {
        $pass  = clean_data($_POST[$password]);
        if(validStaffPassword($pass)) {
            $clean[$password] = $pass;
        } else {
            $errors_detected = true; 
            $error[$password] = 'Password is invalid';
        }
    }
	$found = checkstaff($clean[$username], $clean[$password]);
	if($found == false) {
		$errors_detected = true; 
		$error[$username] = 'Username not found';
        $error[$password] = 'Password is invalid';
	} 
    return $errors_detected;
}
?>
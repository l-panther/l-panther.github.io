$(document).ready(function() {	
	
	var allowsubmit = false, validtitle = false, validfname = false, validlname = false, validhealth = false, validemail = false, validcontact = false; // Variables
		
    // ================================= CHANGE TO LIGHTGREY AND  ITALIC
	function greyItalic(id) {
		$(id).css('color', '#adadad'); // Set font color 
        $(id).css('font-style', 'italic'); // Set font style 
	}
	
    // ================================= CHANGE TO BLACK AND NORMAL
	function blackNorm(id) {
		$(id).css('color', '#000');
        $(id).css('font-style', 'normal');
	}
	
	// ================================= CHANGE BORDER BLACK
	function borderBlack(id) { 
		$(id).css("border", "1px solid #3f3f3f");
	}
	
	// ================================= CHANGE BORDER GREY
	function borderGrey(id) { 
		$(id).css("border", "1px solid lightgrey");
	}
	
	// ================================= CHANGE BORDER RED
	function borderRed(id) { 
		$(id).css("border", "1px solid #b20000");
	}
	
	// ================================= ADD ERRORS 
    function addError(id, string) { 
        // Get element by id and add string to html
        // Id and string are arguements
        $(id).html(string); 
	}
    
    // ================================= SHOW ERRORS 
    function showError(id) {
        // Get element by id and manipulate css to display element
        // Id is arguement
        $(id).css('display', 'inline-block'); }

    // ================================= HIDE ERRORS 
    function hideError(id) {  
        // Get element by id and manipulate css to display element
        // Id is arguement
        $(id).css('display', 'none'); }
    
    // ================================= CHECK ERRORS 
    function checkErrors(title, fname, lname, health, email, contact) {     
        // If form fields are true, allow submit is true
        // Else allow submit is false
        // Form fields are arguements
    	if(validtitle == true && validfname == true && validlname == true && validhealth == true && validemail == true && contact == true) {
			allowsubmit = true;
		} else {
			allowsubmit = false;
		}
		return allowsubmit; }
    
    // ================================= VALIDATE TITLE 
    function validTitle(title) {      
        // If title equals string or title is blank, add error, return false
        // Else if title not equal string, add error, return false
        // Return true
        // Title is arguement
        if((title == "Select your title") || (title == "")) {
			addError("#error-title", "* Title is required");
            return false;
		} else if (!title == "Mr" || !title == "Ms" || !title == "Mrs" || !title == "Miss" || !title == "Master") { // If title field does not have [string], display error message
            addError("#error-title", "* Title is invalid");
            return false;
        }  
        return true; }
    
    // ================================= VALIDATE FIRST NAME 
    function validFname(firstname) {     
        // If first name equals string or first name is blank, add error, return false
        // Else if first name not regular expresion or length is less than/equal to 2, add error, return false
        // Return true
        // First name is arguement
        var fnameRegEx = /^[a-zA-Z]*$/; // Reg expression variable
        if((firstname == "First name") || (firstname == "")) {
            addError("#error-fname", "* First name is required");
            return false;
        } 
        if (!fnameRegEx.test(firstname)) {
            addError("#error-fname", "* Must only contain letters");
            return false;
        }
        if (firstname.length <= 2) {  // If first name field does match conditions
            addError("#error-fname", "* Must be more than 2 letters");
            return false;
        }
        return true; }
    
    // ================================= VALIDATE LAST NAME 
    function validLname(lastname) {     
        // If last name equals string or last name is blank, add error, return false
        // Else if last name not regular expresion or length is less than/equal to 2, add error, return false
        // Return true
        // Last name is arguement
        var lnameRegEx = /^[a-zA-Z \-?]*$/; // Regular expression
        if(lastname == "") {
            addError("#error-lname", "* Last name is required");
            return false;
        }
        if (!lnameRegEx.test(lastname)) {
            addError("#error-lname", "* Must only contain letters");
            return false;
        }
        if (lastname.length <= 2) {  // If first name field does match conditions
            addError("#error-lname", "* Must be more than 2 letters");
            return false;
        }
        return true; }
    
    // ================================= VALIDATE HEALTH NUMBER 
    function validHealth(health) {    
        // If health equals string or health is blank, add error, return false
        // Else if health not regular expresion or length is less than/equal to 2, add error, return false
        // Return true
        // Health is arguement
        var healthRegEx = /^(ZHA)+[0-9]{6}/; // Create variable
        if((health == "ZHA health number") || (health === "")) {
            addError("#error-health", "* Health is required");
            return false; // Set allowsubmit t0 false
        } else {
            if ((!healthRegEx.test(health)) || (health.length != 9 )) { // ---- If health field does NOT match conditions
            addError("#error-health", "* Must have uppercase ZHA and be 6 digits");
            return false; // Set allowsubmit t0 false
            } 
        }
        return true; }

    // ================================= VALIDATE EMAIL 
    function validEmail(email) {    
        // If email is blank, add error, return false
        // Else if email not equal to regular expresion, add error, return false
        // Return true
        // Email is arguement
        
        // Regular expression taken from http://regexlib.com/(X(1)A(I4oK6w1K52I4A2siAA4rLdlVoJJWbFtj22zxZ7RNarY5l1m7szlB9lt1ufxMvMZtcgBvOlD4xiQ-ZEqnoaRBtd4Z9ZtGtlUsY_rTfAc1mx1EbNkQwpKdco32eq5fk-Yem9xsdX6dLUGCEUIfVj9Fi1dQFbnhrZMZLLrg1O-QbnqZfy5FBJKo3baZFFgCM7ia0))/Search.aspx?k=uk+telephone&c=-1&m=-1&ps=20 / Autor: Rob Collyer (Code modified to make spaces number optional)
        var emailRegEx = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;    // ------ Create regular expression
        if(email == "") {
            addError("#error-email", "* Email is required");
            return false; // Set allowsubmit t0 false
        } else {
            if (!emailRegEx.test(email)) { // If email field does NOT match regular expression
            addError("#error-email", "* Must be a valid email address");
            return false; // Set allowsubmit to false
            }   
        }
        return true; }

    // ================================= VALIDATE CONTACT 
    function validContact(telephone) {     
         // If telephone equals string or  is blank, return true
        // Else if telephoneis blank, if telephne not equal to regular expresion, add error, return false
        // Return true
        // Telephone is arguement
        
        // Regular expression taken from http://regexlib.com/(X(1)A(I4oK6w1K52I4A2siAA4rLdlVoJJWbFtj22zxZ7RNarY5l1m7szlB9lt1ufxMvMZtcgBvOlD4xiQ-ZEqnoaRBtd4Z9ZtGtlUsY_rTfAc1mx1EbNkQwpKdco32eq5fk-Yem9xsdX6dLUGCEUIfVj9Fi1dQFbnhrZMZLLrg1O-QbnqZfy5FBJKo3baZFFgCM7ia0))/Search.aspx?k=uk+telephone&c=-1&m=-1&ps=20 / Autor: Rob Collyer (Code modified to make spaces number optional)
        var teleRegEx = /^(0[1-9]\d{1}\s?\d{4}\s?\d{4}$)|(^0[1-9]\d{2}\s?\d{3}\s?\d{4}$)|(^0[1-9]\d{2}\s\d{4}\s?\d{3}$)|(^0[1-9]\d{3}\s\d{3}\s?\d{2}$)|(^0[1-9]\d{3}\s\d{3}\s?\d{3}$)|(^0[1-9]\d{4}\s?\d{3}\s?\d{2}$)|(^0[1-9]\d{4}\s?\d{2}\s?\d{3}$)|(^0[1-9]\d{4}\s?\d{2}\s?\d{2}$)/;   // Create variable:[teleRegEx] and store:[regular Expression
        if((telephone != "") && (!teleRegEx.test(telephone))) { // If telephone field does NOT match regular expression
            addError("#error-contact", "* Must be a valid 11 digit number");
            return false; // Set allowsubmit to false
        }
        return true; }
    // ================================= ACTIONS ================================= //
    
    // .............................. Form Field Hints ....................
   
    // 1. Title
    var title = $("#title"); // Set value of variable: [txtFname] to [string] 
	
    title.focus(function() {	// On blur replace hint ***
		borderBlack(title);
	});
				
    title.blur(function() {	// On blur replace hint ***
		borderGrey(title);
        if(validTitle($(this).val())) { // If title field value is valid
            hideError($("#error-title")); // Hide error
            validtitle = true; // Set valid true
        } else { // Else
            showError($("#error-title")); // Show error
			borderRed(title);	
        }
    });

    // 2. First name field
    var fnameTxt = "First name"; // String variable
    var fname = $("#fname"); // Create variable
    fname.val(fnameTxt); // Set value
   	greyItalic(fname); // Set styling
    fname.focus(function() { // On focus remove hint ***
		borderBlack(fname);
        if($(this).val() == fnameTxt) { // If first name field value is equal to string variable
            $(this).val(""); // Set value
            blackNorm($(this)); // Set color and styling
        } else { // Else 
            $(this).val($(this).val()); // Set value
        }
    });

    fname.blur(function() {	// On blur replace hint ***
		borderGrey(fname);
        if(validFname($(this).val())) { // If first name field value is valid
            hideError($("#error-fname")); // Hide error
            validfname = true; // Set boolean
        } else if ($(this).val() == "") { // Else if first name field value is empty
            $(this).val(fnameTxt); // Set value
            greyItalic($(this)); // Set color and styling
			borderRed(fname);
        } else { // Else
            $(this).val($(this).val()); // Set value
            showError($("#error-fname")); // Show error
			borderRed(fname);
        }
    });

    // 3. Last name field
    var lname = $("#lname"); // String variable 
	
	lname.focus(function() {	// On blur replace hint ***
		borderBlack(lname);
	});
	
    lname.blur(function() {	// On blur hint ***
		borderGrey(lname);
        if(validLname($(this).val())) { // If last name field value is equal to string variable
            hideError($("#error-lname")); // Hide error
            validlname = true; // Set boolean
        } else { // Else 
            showError($("#error-lname")); // Show error
			borderRed(lname);
        }
    });

    // 4. Health field
    var healthTxt = "ZHA health number"; // String variable
    var health = $("#health"); // Create variable
    health.val(healthTxt); // Set value
    health.css('color', '#adadad'); // Set font color 
    health.css('font-style', 'italic'); // Set font style 
    health.focus(function() { // On focus remove hint ***
		borderBlack(health);
        if ($(this).val() == healthTxt) { // If health field value is equal to string variable
            $(this).val(""); // Set value
            blackNorm(health); // Set color and styling
        } else { // Else
            $(this).val($(this).val()); // Set value
        }
    });

    health.blur(function() {	// On blur replace hint ***
		borderGrey(health);
        if(validHealth($(this).val())) { // If health field value is valid
            hideError($("#error-health")); // Hide error
            validhealth = true; // Set boolean
        } else if ($(this).val() == "") { // Else if health field value is empty
            $(this).val(healthTxt); // Set value
            greyItalic($(this)); // Set color and styling 
			borderRed(health);
        } else { // Else 
            $(this).val($(this).val()); // Set value
            showError($("#error-health")); // Show error
			borderRed(health);
        }
    });

    var email = $("#email"); // Set value of variable 
	
	email.focus(function() {	// On blur replace hint ***
		borderBlack(email);
	});
	
    email.blur(function() {	// On blur replace hint ***
		borderGrey(email);
        if(validEmail($(this).val())) { // If email field value is valid
            hideError($("#error-email")); // Hide error 
            validemail = true; // Set boolean
        } else { // Else
            showError($("#error-email")); // show error
			borderRed(email);
        }
    });

    var contact = $("#contact"); // Set variable
	
	contact.focus(function() {	// On blur replace hint ***
		borderBlack(contact);
	});
	
    contact.blur(function() {	// On blur replace hint ***
		borderGrey(contact);
        if($(this).val() != "") { // If contact field value is not empty
            if(validContact($(this).val())) { // If contact field value is valid
                hideError($("#error-contact")); // Hide error
                validcontact = true; // Set Boolean
            } else { // Else  
                showError($("#error-contact")); // Show error
				borderRed(contact);
            }
        } else { // Else
            if($(this).val() = "") { // If contact field value is empty
                validcontact = true; // Set boolean
            }
        }
    }); 
    
    // ...................................... * Switch Tool Tips * ............................... 
    // Funtion for tooltip
    $('#question-mark').mouseenter(function() {  // Question mark mouse over function
        $("#tooltip").show(); // Show tooltip
    });

    $('#question-mark').mouseout(function() { // Question mark mouse out function
        $("#tooltip").hide(); // Hide tooltip
    });
    
	function submitForm() {
		$("#contact-form").submit();
	}
	
	function assignLocation() {
		window.location.assign("index.html");
	}

    // ...................................... * Submit Form * ............................... 
    // Funtion for tooltip
    $("#send").click(function(event) { // On submit   
		// TItle
		if(validTitle(title.val())) { // If valid
			hideError("#error-title"); // Hide error
			validtitle = true; // Valid true
		} else if(!validTitle(title.val())) { // Else if not valid
			showError("#error-title"); // Show error
			validtitle = false; // Valid false
			borderRed(title);
		}

		// First name
		if(validFname(fname.val())) { // If valid
		   	hideError("#error-fname");  // Hide error
			validfname = true; // Valid true
		} else if(!validFname(fname.val())) { // Else if not valid
			showError("#error-fname"); // Show error
			validfname = false; // Valid false
			borderRed(fname);
		}

		// Last name
		if(validLname(lname.val())) { // If valid
			hideError("#error-lname"); // Hide error
			validlname = true; // Valid true
		} else if(!validLname(lname.val())) { // Else if not valid
			showError("#error-lname"); // Show error
			validlname = false; // Valid false
			borderRed(lname);
		} 

		if(validHealth(health.val())) { // If valid
		   	hideError("#error-health"); // Hide error
			validhealth = true; // Valid true 
		} else if(!validHealth(health.val())) { // Else if not valid
			showError("#error-health"); // Show error
			validhealth = false; // Valid false
			borderRed(health);
		}

		// Email
		if(validEmail(email.val())) { // If valid
			hideError("#error-email"); // Hide error
			validemail = true; // Valid true
		} else if(!validEmail(email.val())) { // Else if not valid
			showError("#error-email"); // Show error
			validemail = false; // Valid false
			borderRed(email);
		}

		// Contact
		if(validContact(contact.val())) { // If contact not blank and not valid
			hideError("#error-contact"); // Hide error
            validcontact = true; // Valid true
		} else { // Else
            showError("#error-contact"); // Show error
            validcontact = false; // Valid false
			borderRed(contact);
        }

		var check = checkErrors(validtitle, validfname, validlname, validhealth, validemail, validcontact); // Variable call to check errors
		if(check) { // If check 
        	$("#submitConfirm").show();
			// var submitTimer = setTimeout(submitForm, 800);
			var setLocation = setTimeout(assignLocation, 1500);
			
        }
        event.preventDefault(); // Prevent submit
    });
   
});

     
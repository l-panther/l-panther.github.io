var href = window.location.pathname;
var pos = href.indexOf("contactus");

if (!pos == -1) {
	document.getElementById("send").onclick = init; /* Get element and on click call function */
}

function setColor(id) {
	document.getElementById(id).style.border = "1px solid #b20000";
}

function defaultColor(id) {
	document.getElementById(id).style.border = "";
}

function checkField(id) {
	var elem = document.getElementById(id).value;
	if(elem == "") {
		setColor(id);
	} else {
		defaultColor(id);
	}
}

// Call main functions
function init(){
	checkField("title");
	checkField("fname");
	checkField("lname");
	checkField("email");
	checkField("query");
}

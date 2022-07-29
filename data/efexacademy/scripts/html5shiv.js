window.addEventListener("load", function() {
  // PARSE USER AGENT
  var result = bowser.getParser(navigator.userAgent).getResult();
 
  // BROWSER INFO
  // console.log(result.browser.name);
  if(result.browser.name == "Internet Explorer") {
	   $("#mySidebar-large").css("transform", "rotate(0deg)");
	   $("#mySidebar-large").css("marginTop", "180px");
	   $("#mySidebar-large").css("marginLeft", "10px");
	   $("#mySidebar-large").css("position", "relative");
  }
});
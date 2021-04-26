$(document).ready(function() {
	
	init();
	
	var canvas ;
	var context ;
	var Val_Max;
	var Val_Min;
	var sections;
	var xScale;
	var yScale;
	var y;
			// values of each item on the graph
	var itemName = [ "Distinction", "Merit", "Pass", "Fail"];
	var itemValue = [ 14, 7, 4.2, 4];

	function init() {
			// intialize values for each variables
		sections = 4;
		Val_Max = 14;
		var stepSize = 3;
		var columnSize = 50;
		var rowSize = 60;
		var margin = 10;
		var header = "Students Total" 
			//

		canvas = document.getElementById("graph");
		canvas = document.getElementById("graph");
		context = canvas.getContext("2d");
		context.fillStyle = "#adadad;"

		yScale = (canvas.height - columnSize - margin) / (Val_Max);
		xScale = (canvas.width - rowSize) / (sections + 1);

		context.strokeStyle="#adadad;"; // background black lines
		context.beginPath();
			// column names 
		context.font = "12 pt Arial;"
		context.fillText(header, 0,columnSize - margin);
			// draw lines in the background
		context.font = "10 pt Helvetica"
		var count =  0;
		for (scale=Val_Max;scale>=0;scale = scale - stepSize) {
			y = columnSize + (yScale * count * stepSize); 
			context.fillText(scale, margin,y + margin);
			context.moveTo(rowSize,y)
			context.lineTo(canvas.width,y)
			count++;
		}
		context.stroke();

			// print names of each data entry
		context.font = "4 pt Verdana";
		context.textBaseline="bottom";
		for (i=0;i<5;i++) {
			computeHeight(itemValue[i]);
			context.fillText(itemName[i], xScale * (i+1),y - margin);
		}


			// translate to bottom of graph  inorder to match the data 
	  context.translate(0,canvas.height - margin);
		context.scale(xScale,-1 * yScale);

			// draw each graph bars	
		for (i=0;i<5;i++) {
			context.fillRect(i+1, 0, 0.5, itemValue[i]);
		}
	}

	function computeHeight(value) {
		y = canvas.height - value * yScale ;	
	}

});
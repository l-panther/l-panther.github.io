
$(document).ready(function () {

	setTimeout(getTable(), 3000);

	function getTable() {

		$.get("data/books.json", function (result) {

			let output = "",
				title = "",
				para = "";
			for (var i = 0; i < result.length; i++) {

				if (result[i].id == 1) {
					title += result[i].type;
					para += result[i].shortdescription;
				}

				output += `<!--  Book --> 
					<div class='w3-row book'> 
						<div class='w3-col s12 m3 l3 w3-center'> 
							<img src='images/main/` + result[i].image + `.jpg' alt=''> 
						</div>
						<div class='w3-col s9 m9 l9'> 
							<h3>` + result[i].title + `</h3> 
							<table id='book-table'> 
							<tr>
								<td>
									<span class='w3-hide-small w3-hide-medium'>Title:</span><span class='w3-hide-large'><i class='fa fa-book w3-hide-large'></i></span>
								</td>
								<td>` + result[i].title + `</td>
							</tr> 
							<tr>
								<td>
									<span class='w3-hide-small w3-hide-medium'>Author:</span><span class='w3-hide-large'><i class='fa fa-user w3-hide-large'></i></span>
								</td>
								<td>` + result[i].author + `</td>
							</tr> 
							<tr>
								<td>
									<span class='w3-hide-small w3-hide-medium'>Description:</span><span class='w3-hide-large'><i class='fa fa-info w3-hide-large'></i></span>
								</td>
								<td>` + result[i].description + `</td>
							</tr> 
							<tr>
								<td>
									<span class='w3-hide-small w3-hide-medium'>Price:</span><span class='w3-hide-large'><i class='fa fa-gbp w3-hide-large'></i></span>
								</td>
								<td>` + result[i].price + `</td>
							</tr> 
							<tr>
								<td>
									<span class='w3-hide-small w3-hide-medium'>Rating:</span><span class='w3-hide-large'><i class='fa fa-line-chart w3-hide-large'></i></span>
								</td>
								<td>`;

				for (let j = 0; j < result[i].star; j++) {
					output += "<i class='fa fa-star'></i>";

				}
				for (let k = result[i].star; k < 5; k++) {
					output += "<i class='fa fa-star grey-star'></i>";

				}

				output += `
								</td>
							</tr> 
						</table> <!-- End book --> 
					</div> 
				</div>`;

			}
			$("#bookList").html(output);
			$("#bookMonthTitle").text(title);
			$("#bookMonthDesc").text(para);
		}, "json");
	}

});


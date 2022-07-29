$(document).ready(function () {

	var currentDate = new Date();
	$("#currentDate").html(currentDate.getFullYear());

	$('.modal').on('shown.bs.modal', function () {
		$(".modal").css("padding-right", '0px');

	});
});

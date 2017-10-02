$(document).ready(function () {
	$('#loginbtn').click(function (e) {
		var language = $('#language').val();
		var greeting = g$('Dhawal Bhanushali', language);
		greeting.setLang(language).setText('.greeting');
	});
})

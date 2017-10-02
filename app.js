var greeting = g$('Dhawal Bhanushali', 'hi');
console.log(greeting.greet());

$(document).ready(function () {
	$('#loginbtn').click(function (e) {
		var language = $('#language').val();
		greeting.setLang(language).setText('.greeting');
	});
})

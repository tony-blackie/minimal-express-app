$(document).ready(function() {
	$('.button').on('click', function() {
		$.ajax('/jediList').done(function(data) {
			data.forEach(function(currentObj) {
				$('body').append('<p>' + currentObj.name + '</p>');
			})
		});
	});
});
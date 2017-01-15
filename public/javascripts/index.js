var main = function() {
	$('.dropdown-content').hide();
	$('#tab').click(function($e) {
		console.log('ayy');
		$e.preventDefault();
		$('.dropdown-content').toggle();
	});
	
	$('.u-content').hide();
	$('#tri').click(function($e) {
		$e.preventDefault();
		$('.u-content').toggle();
	});
	
	var keys_pressed = '';
    $('body').keyup(function(event) {
		keys_pressed += event.which
		if(keys_pressed.substr(keys_pressed.length-20) == '38384040373937396665') {
		    console.log('ayy');
		}
	});
	
}

$(document).ready(main);

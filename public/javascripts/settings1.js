var main = function() {
	$('.dropdown-content').hide();
	$('#tab').click(function($e) {
		$e.preventDefault();
		$('.dropdown-content').toggle();
	});
	
	$('#matthewsgay').submit(function($e) {
		$e.preventDefault();
		if($('#binput').val() != '') {
	        $('body').css('background-image', "url('"+$('#binput').val()+"')");
	    }
	    if($('#colorp').val() != '') {
 		    $('#header').css('background-color', $('#colorp').val());
 		    $('h1').css('background-color', $('#colorp').val());
 		    $('#formsub').css('background-color', $('#colorp').val());
    	}
	    console.log('safd');
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

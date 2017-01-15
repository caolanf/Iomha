var main = function() {
    
    responses = {
		'hello':'hi',
		'ping':'pong',
		'ls':'readme.txt<br>game',
		'cat readme.txt':'ur gay lol'
	}
	
	$('#cmd').focus();
	
	$('body').keyup(function(event) {
		console.log('hey');
		if(event.which === 13) {
			cmd = $('#cmd').val();
			if(cmd in responses) {
			    response = responses[cmd];
			} else {
				response = 'Unrecognised command'
			}
			$('body').append('<p>' + response + '</p>');
			$('body').append('<p id="active"> Admin terminal > </p>');
			
			
			$('#active').text($('#active').text() + $('#cmd').val());
			$('#active').removeAttr('id');
			$('#cmd').remove();
			
			$('body').append('<input id="cmd">');
			$('#cmd').focus();
			console.log('test');
		}
	});
	
}

$(document).ready(main);

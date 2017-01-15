var main = function() {
	$('#img-upload').hide();
	$('#embed').hide();
	
	$('#image').click(function() {
	    $('#img-upload').fadeToggle(200);
	    $('#embed').fadeOut(200);
	});
	$('#img-url').keyup(function(event) {
		if(event.which == 13) {
			$('#post_imge').val($('#post_imge').val()+' ' + $(this).val());
			if($("#content-img").length == 0) {
			    $('.content').prepend('<img id="content-img" src="' + $(this).val() + '">');
			} else {
		        $('.content').append('<img id="content-img" src="' + $(this).val() + '"><p contenteditable="true"></p>');
		    }
			$('#img-url').val('');
			$('#img-upload').fadeToggle(200);
		}
	});
	
	$('#embed-img').click(function() {
	    $('#embed').fadeToggle(200);
	    $('#img-upload').fadeOut(200);
	});
	$('#embed-url').keyup(function(event) {
		if(event.which == 13) {
			if($("#content-img").length == 0) {
			    $('.content').prepend('<iframe id="content-img" height="297.5625px" src="' + $(this).val() + '"></iframe>');
			} else {
		        $('.content').append('<iframe id="content-img" height="297.5625px" src="' + $(this).val() + '"></iframe><p contenteditable="true"></p>');
		    }
			$('#embed-url').val('');
			$('#embed').fadeToggle(200);
		}
	});
	
	$('#share').click(function() {
		$('#post_title').val($('#title').val())
		$('#post_content').val($('.content').text());
		$('#post_sub').val(('gyy'));
		$('#new_post').submit();
	});
	
}

$(document).ready(main);

var main = function() {
	$('#subs').hide();
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
			if(/((http|https):\/\/)?(www\.)?(youtube\.com)(\/)?([a-zA-Z0-9\-\.]+)\/?/.test($(this).val())) {
			    var id = $(this).val().match(/watch\?v=([a-zA-Z0-9\-_]+)/)[1];
			    if($("#content-img").length == 0) {
					$('.content').prepend('<iframe id="content-img" height="297.5625px" src="https://www.youtube.com/embed/' + id + '" allowfullscreen></iframe>');
				} else {
					$('.content').append('<iframe id="content-img" height="297.5625px" src="https://www.youtube.com/embed/' + id + '" allowfullscreen></iframe><p contenteditable="true"></p>');
				}
				$('#post_imge').val($('#post_imge').val()+' ' + '(embed)https://youtube.com/embed/' + id);
			} else{
				if($("#content-img").length == 0) {
					$('.content').prepend('<iframe id="content-img" height="297.5625px" src="' + $(this).val() + '"></iframe>');
				}else {
					$('.content').append('<iframe id="content-img" height="297.5625px" src="' + $(this).val() + '"></iframe><p contenteditable="true"></p>');
				}
				$('#post_imge').val($('#post_imge').val() + '(embed)' + $(this).val() + ' ');
		    }
			$('#embed-url').val('');
			$('#embed').fadeToggle(200);
		}
	});
	
	$('#share').click(function() {
	    $('#subs').animate({'width': 'toggle'});
	});
	
	$('#subs').keyup(function($e) {
		if(event.which == 13) {
			var tcontent = ''
			$('.content').children('p').each(function() {
				tcontent += $(this).text()+'(newpar)';
			});
			$('#post_title').val($('#title').val())
			$('#post_content').val(tcontent);
			$('#post_sub').val($(this).val());
			$('#new_post').submit();
		}
	});
	$("#posteditor").submit(function(e){
		return false;
	});
	
}

$(document).ready(main);

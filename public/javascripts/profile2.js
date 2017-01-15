var main = function() {
	$('#commentinp').keyup(function(event) {
		if(event.which === 13) {
			$('.comments').prepend('<div id="comment" class="comment"> <div class="comment-back"> <a id="comment-username" href="www.test.com">Alan</a><div id="text">' + $(this).val() + '</div><a href="#"><img class="reply" src="images/reply.png"></a></div></div>');
			$('.reply').hide()
			$('#commentinp').val('')
		}
	});
	
	$('.reply').hide();
	$('.r-reply').hide();
	$('.r_comment').hide();
	
	$('.comments').mouseenter(function() {
		$('.comment-back').each(function(i, comment) {
			$(comment).mouseenter(function() {
				$('.reply', comment).show();
			}).mouseleave(function() {
				$('.reply', this).hide();
			});
		});
		$('.r-comment-back').each(function(i, comment) {
			$(comment).mouseenter(function() {
				$('.r-reply', comment).show();
			}).mouseleave(function() {
				$('.r-reply', this).hide();
			});
		});
	});
	
	$('.comment').click(function() {
		if($('.expand', this).attr('src') == 'images/collapse.png') {
		    $('.expand', this).attr('src','images/expand.png');
	    }else {
			$('.expand', this).attr('src','images/collapse.png');
		}
	    $('.r_comment', this).toggle();
	});
	
	$('.dropdown-content').hide();
	$('#tab').click(function() {
		$('.dropdown-content').toggle();
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

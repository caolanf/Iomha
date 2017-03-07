var main = function() {
	
	$('.up').click(function($e) {
	    $e.preventDefault();
	    test = $(this).parent().siblings('#score');
	    $(this).css({opacity: 1});
	    $(this).parent().siblings("#downp").children(".down").fadeTo('fast', 0.6, function() {
				
	    });
	    $.ajax({
			url: 'http://'+window.location.host+$(this).parent().siblings('#info').children('a').eq(1).text() + '/' + $(this).attr('id').substring(1)+'/upvote',
			success: function(data) {
				test.text(data.split("<body")[1].split(">").slice(1).join(">").split("</body>")[0]);
                return data;
            }
		});
	});
	$('.down').click(function($e) {
	    $e.preventDefault();
	    test = $(this).parent().siblings('#score');
	    $(this).css({opacity: 1});
	    $(this).parent().siblings("#upp").children(".up").fadeTo('fast', 0.6, function() {
		
	    });
	    $.ajax({
			url: 'http://'+window.location.host+$(this).parent().siblings('#info').children('a').eq(1).text() + '/' + $(this).attr('id').substring(1)+'/downvote',
			success: function(data) {
				test.text(data.split("<body")[1].split(">").slice(1).join(">").split("</body>")[0]);
                return data;
            }
		});
	});
	$('.postsort-content').animate({'height': 'toggle'}, 1);
	$('#sortcont').mouseenter(function($e) {
		$('.postsort-content').stop().animate({'height': 'toggle'});
	}).mouseleave(function($e) {
		$('.postsort-content').stop().animate({'height': 'toggle'});
	});
	
}

$(document).ready(main);

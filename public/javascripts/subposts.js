var main = function() {
	
	$('.up').click(function($e) {
	    $e.preventDefault();
	    test = $(this).parent().siblings('#score');
	    $(this).css({opacity: 1});
	    $(this).parent().siblings("#downp").children(".down").fadeTo('fast', 0.6, function() {
				
	    });
	    $.ajax({
			url: window.location.href+'/'+$(this).attr('id')+'/upvote',
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
			url: window.location.href+'/'+$(this).attr('id')+'/downvote',
			success: function(data) {
				test.text(data.split("<body")[1].split(">").slice(1).join(">").split("</body>")[0]);
                return data;
            }
		});
	});
	
}

$(document).ready(main);

var main = function() {
	$('#commentinp').keyup(function(event) {
		if(event.which === 13) {
		  
			$('.comments').prepend('<div id="newcom" class="comment"> <div class="comment-back"> <a id="comment-username" href="www.test.com">'+$('#c_user').text()+'</a><a class="cscore">0 pts</a><a href="" class="upcp"><img src="/images/up-arrow.png" id="newcomu"class="upcom"></a><a href="" class="downcp"><img src="/images/down-arrow.png" id="newcomd"class="downcom"></a><div id="text">' + $(this).val() + '</div><a class="reply" href="#">reply</a></div></div>');
			$('#commentinp').val('')
		}
	});
	
	$('.reply').click(function($e) {
		$(this).parent().parent().children('.r_comment').toggle();
		if($('.expand', $(this).parent()).attr('src') == '../../images/collapse.png') {
		    $('.expand', $(this).parent()).attr('src','../../images/expand.png');
	    }else {
			$('.expand', $(this).parent()).attr('src','../../images/collapse.png');
		}
		
		$('<input class="rinp" placeholder="Write a reply">').insertAfter($(this).parent());
		$e.preventDefault();
	});
	$('.r-reply').click(function($e) {
		$(this).parent().parent().parent().children('.r_comment').toggle();
		if($('.expand', $(this).parent().parent()).attr('src') == '../../images/collapse.png') {
		    $('.expand', $(this).parent().parent()).attr('src','../../images/expand.png');
	    }else {
			$('.expand', $(this).parent().parent()).attr('src','../../images/collapse.png');
		}
		
		$('<input class="rinp" placeholder="Write a reply">').insertAfter($(this).parent());
		$e.preventDefault();
	});
	
	$('.r-reply').hide();
	$('.r_comment').hide();
	
	$('#smenu').hide();
	$('#share').click(function($e) {
		$e.preventDefault();
		$('#smenu').toggle();
	});
	
	$('.u-content').hide();
	$('#tri').click(function($e) {
		$e.preventDefault();
		$('.u-content').toggle();
	});
	
	$('.comment-back').click(function() {
		if($('.expand', this).attr('src') == '../../images/collapse.png') {
		    $('.expand', this).attr('src','../../images/expand.png');
	    }else {
			$('.expand', this).attr('src','../../images/collapse.png');
		}
	    $(this).parent().children('.r_comment').toggle();
	    
	});
	$('.r-comment-back').click(function() {
		if($('.expand', this).attr('src') == '../../images/collapse.png') {
		    $('.expand', this).attr('src','../../images/expand.png');
	    }else {
			$('.expand', this).attr('src','../../images/collapse.png');
		}
	    $(this).parent().children('.r_comment').toggle();
	    
	});
	
	$('#upvote').click(function($e) {
		$e.preventDefault();
		$.ajax({
			url: window.location.href+'/upvote',
			success: function(data) {
				$('#points').text(data.split("<body")[1].split(">").slice(1).join(">").split("</body>")[0] + ' points');
                return data;
            }
		});
    });
    $('#downvote').click(function($e) {
		$e.preventDefault();
		$.ajax({
			url: window.location.href+'/downvote',
			success: function(data) {
				$('#points').text(data.split("<body")[1].split(">").slice(1).join(">").split("</body>")[0] + ' points');
                return data;
            }
		});
		
    });
    
    $("body").on("keyup", '.rinp', function() {
		console.log('ay');
		if(event.which === 13) {
			$(this).parent().children('.r_comment').show();
			$('.expand', $(this).parent()).attr('src','../../images/collapse.png');
			
			$('<div id="newcom" class="r_comment"> <div class="r-comment-back"> <a id="comment-username" href="www.test.com">'+$('#c_user').text()+'</a><a class="cscore">0 pts</a><a href="" class="upcp"><img src="/images/up-arrow.png" id="newcomu"class="upcom"></a><a href="" class="downcp"><img src="/images/down-arrow.png" id="newcomd"class="downcom"></a><div id="text">' + $(this).val() + '</div><a class="reply" href="#">reply</a></div></div>').insertAfter($(this));
			$('#rinp').val('')
			$('#commentinp').val($(this).val());
			$('#comment_parent').val($(this).parent().attr('id') );
			$('#commentf').submit();
			$('#commentinp').val('');
			$('#comment_parent').val('0');
			$(this).remove();
		}
	});

	
	
	$('.dropdown-content').hide();
	$('#tab').click(function($e) {
		$e.preventDefault();
		$('.dropdown-content').toggle();
	});
	
	var keys_pressed = '';
    $('body').keyup(function(event) {
		keys_pressed += event.which
		if(keys_pressed.substr(keys_pressed.length-20) == '38384040373937396665') {
		    console.log('ayy');
		}
	});
	
	$('.upcom').click(function($e) {
		$(this).parent().parent().parent().children('.r_comment').toggle();
		if($('.expand', $(this).parent().parent()).attr('src') == '../../images/collapse.png') {
		    $('.expand', $(this).parent().parent()).attr('src','../../images/expand.png');
	    }else {
			$('.expand', $(this).parent().parent()).attr('src','../../images/collapse.png');
		}
		
		console.log('fasdasfd');
	    $e.preventDefault();
	    test = $(this).parent().siblings('.cscore');
	    $(this).css({opacity: 1});
	    $(this).parent().siblings(".downcp").children(".downcom").fadeTo('fast', 0.6, function() {
				
	    });
	    $.ajax({
			url: '/comments/'+$(this).attr('id')+'/upvote',
			success: function(data) {
				test.text(data.split("<body")[1].split(">").slice(1).join(">").split("</body>")[0]+ ' pts');
                return data;
            }
		});
	});
	$('.downcom').click(function($e) {
		$(this).parent().parent().parent().children('.r_comment').toggle();
		if($('.expand', $(this).parent().parent()).attr('src') == '../../images/collapse.png') {
		    $('.expand', $(this).parent().parent()).attr('src','../../images/expand.png');
	    }else {
			$('.expand', $(this).parent().parent()).attr('src','../../images/collapse.png');
		}
		
	    $e.preventDefault();
	    test = $(this).parent().siblings('.cscore');
	    $(this).css({opacity: 1});
	    $(this).parent().siblings(".upcp").children(".upcom").fadeTo('fast', 0.6, function() {
		
	    });
	    $.ajax({
			url: '/comments/'+$(this).attr('id')+'/downvote',
			success: function(data) {
				test.text(data.split("<body")[1].split(">").slice(1).join(">").split("</body>")[0] + ' pts');
				console.log(data.split("<body")[1].split(">").slice(1).join(">").split("</body>")[0]);
                return data;
            }
		});
	});
	
	$('#commentf').submit(function($e){
      $.ajax({
        type: this.method,
        url: this.action,
        data: $(this).serialize(),
        success: function(){
          
        }
      });
      return false;
    });
	
}

$(document).ready(main);

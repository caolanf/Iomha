var main = function() {
	var audio = new Audio('cool page/music.mp3');
    var left=10;
    var speed = 5;
    audio.play();
	
	$('#commentinp').keyup(function(event) {
		if(event.which === 13) {
			$('.comments').prepend('<div id="comment"> <a id="comment-username" href="www.test.com">Alan</a><div id="text">' + $(this).val() + '</div><a href="#"><img id="reply" src="images/reply.png"></a></div>');
			$('#commentinp').val('')
		}
	});
	
	$('#reply').hide();
	
	$("#comment").mouseenter(function() {
	   $('#reply').show();
    }).mouseleave(function() {
	   $('#reply').hide();
	});
	
}

$(document).ready(main);
console.log('hi');

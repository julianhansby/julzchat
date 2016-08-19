var socket = io();

$('form').submit(function(){
	socket.emit('chat message', {
			msg: $('#m').val(),
			user: $("#user").val()
		}
	);
	$('#m').val('');
	return false;
});

socket.on('chat message', function(data){
	$('#messages').append($('<li>').text(data.user+" : "+data.msg));
});
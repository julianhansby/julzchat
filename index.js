var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// set static public folder
app.use(express.static(__dirname+"/public"));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

	console.log("user is connected");
	
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});

	socket.on("disconnect", function(){
		console.log("user has disconnected");
	});
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
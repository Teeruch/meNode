var express = require('express');
var app 	= express();
var path 	= require('path');
var port 	= 3000;
 
var server = app.listen(port, function() {
    console.log('Listening on port: ' + port);
}); 
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); 
app.use(express.static('public'));

var user = ['teeruch'];
 
app.get('/', function(req, res) {
    res.json(user);
});

var io = require('socket.io').listen(server);
 
io.on('connection', function(socket) {
    
    console.log('a user connected');
	
	io.on('server_message', function(message) {
		io.emit('client_message',message);
	});
	
});
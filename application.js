var express = require('express');
var app = express();
var path = require('path');
var port = 8081;
 
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
});
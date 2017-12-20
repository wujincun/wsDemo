/*const WebSocket = require('ws');

const ws = new WebSocket('ws://www.host.com/path');

ws.on('open', function open() {
	ws.send('something');
});

ws.on('message', function incoming(data) {
	console.log(data);
});*/

var app = require('http').createServer()
var io = require('socket.io')(app);

const PORT = 8081;
let clientCount = 0;

app.listen(PORT)
console.log('websocket sever listening on port ' + PORT)
io.on('connection', function(socket) {
	clientCount++;
	socket.nickname = `user${clientCount}`;
	//socket.emit是向客户端发送消息，io.emit是广播
	io.emit('enter', socket.nickname + ' comes in');
	socket.on('message', function(str) {
		io.emit('message', socket.nickname + ' says: ' + str)
	})
	socket.on('disconnect', function() {
		io.emit('leave', socket.nickname + ' left')
	})
})
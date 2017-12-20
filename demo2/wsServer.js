/*const WebSocket = require('ws');

const ws = new WebSocket('ws://www.host.com/path');

ws.on('open', function open() {
	ws.send('something');
});

ws.on('message', function incoming(data) {
	console.log(data);
});*/


const WebSocket = require('ws');
const PORT = 8080;

const wss = new WebSocket.Server({
	port: PORT
});
console.log('websocket sever listening on port ' + PORT)
wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(message) {
		console.log('received: %s', message);
		ws.send(message);
	});
	ws.on("close", function(code) {
		console.log("关闭连接")
	});
	ws.on("error", function(reason) {
		console.log("异常关闭")
	});
});
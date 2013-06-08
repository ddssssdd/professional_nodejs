var connect = require('connect');
var helloWorld = require('./hello_world_response');
var app = connect.createServer(helloWorld);
app.listen(4000);

var replyText = require('./replyText');
connect.createServer(replyText('i am here')).listen(4001);
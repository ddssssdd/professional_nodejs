var server = require('net').createServer();
var port = 10000;
server.on('listen',function(){
	console.log('Server is listening on port',port);
});
server.on('connection',function(socket){
	console.log('Server has a new connection');
	//socket.end();
	//server.close();
	socket.setEncoding('utf8');
	socket.write('hello! you can start typeing, Type quit to exit.\n');
	socket.on('data',function(data){
		console.log('Client:',data.toString());
		if (data.trim().toLowerCase()==='q'){
			socket.write('Bye bye!');
			return socket.end();
			
		}
		socket.write(data);
	});
	socket.on('end',function(){
		console.log('Client end');
		//server.close();
	});
});
server.on('close',function(){
	console.log('Server is now closed');
});
server.on('error',function(err){
	console.log('Error occurred:',err.message);
});
server.listen(port);
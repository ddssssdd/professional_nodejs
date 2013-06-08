console.log("hello world");
var http = require("http");
var my = require("./MyModules2");
my.printA();
my.printB();
console.log(my.pi);
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World!\n');
}).listen(1337,'127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

/*
var fs = require('fs');
fs.readFile('./hello.js',function(err,fileContent){
	if (err){
		throw err;
	}
	console.log('file content',fileContent.toString());
});
*/

/*
var CustomClass = require('./customClass');
var instance = new CustomClass();
instance.on('Custom event',function(v1,v2){
	console.log(v1+v2);
});
instance.test();
instance.on('tick',function(){
	console.log('tick');
});
*/
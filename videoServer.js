var fs = require('fs');
require('http').createServer(function(req,res){
	res.writeHeader(200,{'Content-type':'video/mp4'});
	var rs = fs.createReadStream('a1.m4v');
	rs.pipe(res);
}).listen(4000);
var connect = require('connect');
var app = connect();
app.use(connect.static(__dirname+'/images'));
app.use(function(req,res){
	res.end('You can add dear.jpg');
});
app.listen(4000);
var connect = require('connect');
var app = connect();
connect.errorHandler.title = "My Application";
 app.use(connect.logger('tiny'))
	.use(function(req,res,next){
		next(new Error('Hey!'));
		})
	.use(function(req,res){
		res.end('I am user logger');
		})
	.use(connect.errorHandler());
app.listen(4000);
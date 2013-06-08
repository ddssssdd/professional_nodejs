var connect = require('connect');
var writeHeader = require('./writeHeader');
var replyText = require('./replyText');
var saveRequest = require('./saveRequest');
var errorCreator = require('./errorCreator');
var errorHandler = require('./errorHandler');
var app = connect.createServer(
	
	saveRequest(__dirname+'/requests'),
	writeHeader('X-Powered-By','Node'),
	errorCreator(),
	replyText('This is after header'),
	
	
	errorHandler()
);
app.listen(4000);
	
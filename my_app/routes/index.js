
/*
 * GET home page.
 */
/*
exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};
*/
var users = require('../data/users');
module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index',{title:'Express'});
	});
	app.get('/users',function(req,res){
		res.render('users/index',{title:'Users',users:users})
	});
	app.get('/users/new',function(req,res){
		res.render('users/new',{title:'New User'});		
	});
	app.get('/users/:name',function(req,res,next){
		var user = users[req.params.name];
		if (user){
			res.render('users/profile',{title:'User profile',user:user});
		}else{
			next();
		}
	});
	app.post('/users',function(req,res){
		if (users[req.body.username]){
			res.send('Confilt',409);
		}else{
			users[req.body.username] = req.body;
			res.redirect('/users');
		}
	});
	app.del('/users/:name',function(req,res,next){
		if (users[req.params.name]){
			delete users[req.params.name];
			res.redirect('/users');
		}else{
			next();
		}
	});
};
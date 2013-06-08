util = require('util');
var EventEmitter = require('events').EventEmitter;
var MyClass = function(){
	var self = this;
	this.test=function(){
		self.emit('Custom event','argument 1','argument 2');
	}
	setInterval(function(){
			self.emit('tick');
		},1000);
}
MyClass.prototype.someMethod=function(){
	this.emit('Custom event','argument 1','argument 2');
}


util.inherits(MyClass,EventEmitter);
module.exports=MyClass;


var timeoutTime = 2000;
var timeout = setTimeout(function(){
	console.log('time out');
},timeoutTime);
clearTimeout(timeout);

var interval=setInterval(function(){
	console.log('interval');
},timeoutTime);
clearInterval(interval);


process.nextTick(function(){
	console.log('execute after all events are excuted');
});
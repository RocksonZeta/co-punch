'use strict';
module.exports = function(){
	var cofy = require('cofy');
	var amqp = require('amqp');
	amqp.$createConnection = cofy.fn(amqp.createConnection ,false , amqp);
	cofy.class(amqp.Connection);
	cofy.class(require('amqp/lib/exchange.js') , true , ['bind','publish','unbind','bind_headers']);
	cofy.class(require('amqp/lib/queue.js') , true , ['bind']);
	amqp.Connection.prototype.$ready = function() {
		var _this = this;
		return function(done){
			_this.on('ready' , function(){
				done();
			});
			_this.on('error',function(e){
				done(e);
			});
		};
	};
};
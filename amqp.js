'use strict';
module.exports = function(){
	var cofy = require('cofy');
	var amqp = require('amqp');
	cofy(amqp.Connection.prototype);
	cofy(require('amqp/lib/exchange.js').prototype , true ,null , ['bind','publish','unbind','bind_headers']);
	cofy(require('amqp/lib/queue.js').prototype , true ,null , ['bind']);
};
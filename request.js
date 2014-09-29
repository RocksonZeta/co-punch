'use strict';
module.exports = function(){
	var cofy = require('cofy');
	var request = require('request');
	var co_request = cofy(request);
	request.co_request = co_request;
	var methods = ['put','patch','post','get','del','head'];
	for(var i = 0 ; i < methods.length ;i++){
		request["co_"+methods[i]] = cofy(request[methods[i]]);
	}
	return co_request;
};
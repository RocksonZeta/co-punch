'use strict';
var punchedHistory = {};
var path = require('path');
module.exports = function(names){
	if(1<arguments.length){
		for(var i = 0 ; i < arguments.length ;i++){
			module.exports(arguments[i]);
		} 
	}
	if(require('util').isArray(names)){
		for(var i = 0 ; i < names.length ;i++){
			module.exports(names[i]);
		}
	}
	if('string' == typeof names){
		if(punchedHistory[names]){
			return;
		}
		punchedHistory[names] = 1;
		return require('./lib/'+names)();
	}
};

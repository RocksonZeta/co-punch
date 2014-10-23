'use strict';
module.exports = function(){
	var cofy = require('cofy');
	var oracle = require('oracle');
	var bindings = require("oracle/build/Release/oracle_bindings");
	oracle.co_connect = cofy.fn(oracle.connect);
	cofy.class(bindings.Connection);
};
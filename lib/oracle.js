'use strict';
module.exports = function(){
	var cofy = require('cofy');
	var bindings = require("oracle/build/Release/oracle_bindings");
	var oracle = require('oracle');
	oracle.co_connect = cofy.fn(oracle.connect);
	cofy.class(bindings.Connection);
};
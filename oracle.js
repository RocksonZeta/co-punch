'use strict';
module.exports = function(){
	var cofy = require('cofy');
	var bindings = require("oracle/build/Release/oracle_bindings");
	var oracle = require('oracle');
	oracle.co_connect = cofy(oracle.connect);
	cofy(bindings.Connection.prototype);
};
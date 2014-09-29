'use strict';
module.exports = function(){
	var cofy = require('cofy');
	var PoolConnection = require('mysql/lib/PoolConnection.js');
	var Pool = require('mysql/lib/Pool.js');
	var PoolCluster = require('mysql/lib/PoolCluster.js');
	cofy(PoolConnection.prototype);
	cofy(Pool.prototype);
	cofy(PoolCluster.prototype);
};
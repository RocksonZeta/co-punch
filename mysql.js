'use strict';
module.exports = function(mysql , node_modules_dir){
	var cofy = require('cofy');
	var path  =require('path');
	var PoolConnection = require(path.join(node_modules_dir , 'mysql/lib/PoolConnection.js'));
	var Pool = require(path.join(node_modules_dir ,'mysql/lib/Pool.js'));
	var PoolCluster = require(path.join(node_modules_dir ,'mysql/lib/PoolCluster.js'));
	cofy(PoolConnection.prototype);
	cofy(Pool.prototype);
	cofy(PoolCluster.prototype);
};
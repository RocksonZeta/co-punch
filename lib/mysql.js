'use strict';
module.exports = function(){
	var cofy = require('cofy');
	cofy.class(require('mysql/lib/PoolConnection.js'));
	cofy.class(require('mysql/lib/Pool.js'));
	cofy.class(require('mysql/lib/PoolCluster.js'));
};
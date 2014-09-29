'use strict';
module.exports = function(){
	require('cofy')(require('redis').RedisClient.prototype);
};
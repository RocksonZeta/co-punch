'use strict';

module.exports = function(redis){
	require('cofy')(redis.RedisClient.prototype);
};
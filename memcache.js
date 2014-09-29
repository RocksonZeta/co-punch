'use strict';
module.exports = function(){
	require('cofy')(require('memcache').Client.prototype);
};
'use strict';
module.exports = function(){
	require('cofy').class(require('memcache').Client);
};
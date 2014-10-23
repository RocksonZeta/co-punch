'use strict';
module.exports = function(){
	var RedisClient =  require('redis').RedisClient;
	require('cofy').class(RedisClient);

	RedisClient.prototype.$getJson = function(key){
		var _this = this;
		return function(done){
			_this.get(key, function(e,r){
				if(e){
					return done(e);
				}
				try{
					done(null ,JSON.parse(r));
				}catch(e){
					done(null , r);
				}

			});
		};
	};

	RedisClient.prototype.$setJson = function(key,object){
		var _this = this;
		return function(done){
			_this.set(key,JSON.stringify(object),done);
		};
	};
};
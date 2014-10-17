'use strict';
module.exports = function(){
	var cofy = require('cofy');
	require('mysql');
	var Connection = require('mysql/lib/Connection.js');
	var PoolConnection = require('mysql/lib/PoolConnection.js');
	var Pool = require('mysql/lib/Pool.js');
	cofy.class(PoolConnection);
	cofy.class(Pool);
	cofy.class(require('mysql/lib/PoolCluster.js'));

	Connection.prototype.$q = function(sql,opt){
		var _this = this;
		return function(done){
			_this.query(sql ,opt , function(e,r){
				done(e,r);
			});
		};
	};
	Connection.prototype.$q1 = function(sql,opt){
		var _this = this;
		return function(done){
			_this.query(sql ,opt , function(e,r){
				done(e,r&&r[0]);
			});
		};
	};
	Pool.prototype.$q = function(sql,opt){
		var _this = this;
		return function(done){
			_this.query(sql ,opt , function(e,r){
				done(e,r);
			});
		};
	};
	Pool.prototype.$q1 = function(sql,opt){
		var _this = this;
		return function(done){
			_this.query(sql ,opt , function(e,r){
				done(e,r&&r[0]);
			});
		};
	};
};
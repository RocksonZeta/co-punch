'use strict';
var co  =require('co');
var punch = require('../index.js');

;


describe("punch" , function(){
	it("#punch nodejs" , function(done){
		co(function*(){
			punch('nodejs');
			var fs = require('fs');
			(yield fs.$exists(__dirname)).should.be.ok;
			done();
		})();
	});
	it("#punch mysql" , function(done){
		co(function*(){
			punch('mysql');
			var mysql = require('mysql');
			done();
		})();
	});
	it("#punch redis" , function(done){
		co(function*(){
			punch('redis');
			require('redis').RedisClient.prototype.$get.should.be.ok;
			done();
		})();
	});
	it("#punch memcache" , function(done){
		co(function*(){
			punch('memcache');
			require('memcache').Client.prototype.$get.should.be.ok;
			done();
		})();
	});
	it("#punch mongodb" , function(done){
		co(function*(){
			punch('mongodb');
			require('mongodb').MongoClient.prototype.$connect.should.be.ok;
			done();
		})();
	});
	it("#punch amqp" , function(done){
		co(function*(){
			punch('amqp');
			require('amqp').Connection.prototype.$connect.should.be.ok;
			done();
		})();
	});
	it("#punch request" , function(done){
		co(function*(){
			punch('request');
			require('request').$request.should.be.ok;
			require('request').$get.should.be.ok;
			done();
		})();
	});
});
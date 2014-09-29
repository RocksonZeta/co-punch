'use strict';
var co  =require('co');
var punch = require('../index.js');

;


describe("punch" , function(){
	it("#punch nodejs" , function(done){
		co(function*(){
			punch('nodejs');
			var fs = require('fs');
			(yield fs.co_exists(__dirname)).should.be.ok;
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
			require('redis').RedisClient.prototype.co_get.should.be.ok;
			done();
		})();
	});
	it("#punch memcache" , function(done){
		co(function*(){
			punch('memcache');
			require('memcache').Client.prototype.co_get.should.be.ok;
			done();
		})();
	});
	it("#punch mongodb" , function(done){
		co(function*(){
			punch('mongodb');
			require('mongodb').MongoClient.prototype.co_connect.should.be.ok;
			done();
		})();
	});
	it("#punch amqp" , function(done){
		co(function*(){
			punch('amqp');
			require('amqp').Connection.prototype.co_connect.should.be.ok;
			done();
		})();
	});
	it("#punch request" , function(done){
		co(function*(){
			punch('request');
			require('request').co_request.should.be.ok;
			require('request').co_get.should.be.ok;
			done();
		})();
	});
});
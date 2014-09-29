'use strict';
var punch = require('../');
var co = require('co');
punch('mongodb');
var MongoClient = require('mongodb').MongoClient;
co(function*(){
	var db = yield MongoClient.co_connect('mongodb://192.168.13.183:27018/test');
	yield db.co_dropDatabase();
	var collection = db.collection('test_insert');
	var docs = yield collection.co_insert({name:"tom",age:10});
	console.log('after insert' , docs);
	var users = yield collection.find({name:"tom"}).sort('name').limit(1).co_toArray();
	console.log(users);
	var count = yield collection.co_count({name:'tom'});
	console.log(count);
	db.close();
})();

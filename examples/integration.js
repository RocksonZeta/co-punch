'use strict';
// var punch = require('co-punch');
var punch = require('../');
punch('nodejs','redis','mysql','mongodb','request');
var co = require('co');
var fs = require('fs');
var redis = require('redis');
var mysql = require('mysql');
var mongodb = require('mongodb');
var request = require('request');
var assert = require('assert');


var MongoClient = mongodb.MongoClient;

var mysqlClient = mysql.createConnection({
  host     : '192.168.13.183',
  user     : 'root',
  password : 'yzkj2014',
  database : 'mysql'
});


var redisClient = redis.createClient(6379,'192.168.13.183');

//callback function must use yield co_*;
co(function*(){//or in koa
	var file = yield fs.co_readFile('package.json','utf8');
	yield redisClient.co_set('file' , file);
	assert.equal(file,yield redisClient.co_get('file'));
	var users = (yield mysqlClient.co_query("select * from user"))[0];
	console.log(users);
	var db = yield MongoClient.co_connect('mongodb://192.168.13.183:27018/test');
	var collection = db.collection('test_users');
	var pUser = yield collection.co_insert({name:"tom",age:10});
	var test_users = yield collection.find({name:"tom"}).sort('name').limit(1).co_toArray();
	console.log(pUser,test_users);
	var html = (yield request.co_request({url:"http://www.google.com"}))[1];
	var getHtml = (yield request.co_get("http://www.google.com"))[1];
	console.log(html ,getHtml);
})();
co-punch
========
[![Build Status](https://travis-ci.org/RocksonZeta/co-punch.svg?branch=master)](https://travis-ci.org/RocksonZeta/co-punch)
[![Coverage Status](https://coveralls.io/repos/RocksonZeta/co-punch/badge.png?branch=master)](https://coveralls.io/r/RocksonZeta/co-punch?branch=master)
[![NPM version](https://badge.fury.io/js/co-punch.svg)](http://badge.fury.io/js/co-punch)
[![Dependency Status](https://david-dm.org/RocksonZeta/co-punch.svg)](https://david-dm.org/RocksonZeta/co-punch)

Punch old libraries!

##NOTE:
It should work within co or koa.they work well in node-0.11.* or gnode.
After punch, we eliminate cumbersome callbacks.

##Installation
```
$ npm install co-punch
```

##Examples:
```js
'use strict';
var punch = require('co-punch');
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
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'mysql'
});
var redisClient = redis.createClient(6379,'localhost');

//callback function must use yield co_*;
co(function*(){//or in koa
	var file = yield fs.co_readFile('package.json','utf8');
	yield redisClient.co_set('file' , file);
	assert.equal(file,yield redisClient.co_get('file'));
	var users = (yield mysqlClient.co_query("select * from user"))[0];
	console.log(users);
	var db = yield MongoClient.co_connect('mongodb://localhost:27017/test');
	var collection = db.collection('test_users');
	var pUser = yield collection.co_insert({name:"tom",age:10});
	var test_users = yield collection.find({name:"tom"}).sort('name').limit(1).co_toArray();
	console.log(pUser,test_users);
	var html = (yield request.co_request({url:"http://www.google.com"}))[1];
	var getHtml = (yield request.co_get("http://www.google.com"))[1];
	console.log(html ,getHtml);
})();
```

API:
```
var punch = require('co-punch')
```
### punch(modules)
- `module` `{string|array|var args}` - the name of the modules.After punch,old callback function can be call like this style `yield co_oldFn(args)`.

Now `co-punch` supports `amqp`,`memcache`,`mongodb`,`mysql`,`nodejs`,`redis`,`request`.

`fn(args,function(e,r){}) -> var r= yield fn(args);`//if e not null , this will throw an error.

try it now!


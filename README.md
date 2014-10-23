co-punch
========
[![Build Status](https://travis-ci.org/RocksonZeta/co-punch.svg?branch=master)](https://travis-ci.org/RocksonZeta/co-punch)
[![Coverage Status](https://coveralls.io/repos/RocksonZeta/co-punch/badge.png?branch=master)](https://coveralls.io/r/RocksonZeta/co-punch?branch=master)
[![NPM version](https://badge.fury.io/js/co-punch.svg)](http://badge.fury.io/js/co-punch)
[![Dependency Status](https://david-dm.org/RocksonZeta/co-punch.svg)](https://david-dm.org/RocksonZeta/co-punch)

Punch old libraries!

##NOTE: yield function prefix has changed to '$'.

It should work within co or koa.they work well in node-0.11.* or gnode.
After punch, we eliminate cumbersome callbacks.

##Installation
```
$ npm install co-punch --save
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
var mysqlClient = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '123456',
	database : 'db',
	queryFormat: function(query, values) {
		if (!values) return query;
		return query.replace(/\:(\w+)/g, function(txt, key) {
			if (values.hasOwnProperty(key)) {
				return this.escape(values[key]);
			}
			return txt;
		}.bind(this));
	}
});
var redisClient = redis.createClient(6379,'localhost');

//callback function must use yield $*;
co(function*(){//or in koa
	//read file
	var file = yield fs.$readFile('package.json','utf8');

	//redis operations
	yield redisClient.$set('file' , file);
	assert.equal(file,yield redisClient.$get('file'));
	yield redisClient.$setJson('user1' , {name:1});
	var user1 = yield redisClient.getJson('user1');

	//mysql
	//query with full return [[result] , [properties]];
	var users = (yield mysqlClient.$query("select * from user"))[0];
	//user $q to get results only
	var apps = yield mysqlClient.$q("select * from apps where uid=:uid" , {uid:1});
	//user $q1 to get first item in results.
	var count = yield mysqlClient.$q1("select count(*) as count from user where name=:name and pwd=:pwd" , {name:'name',pwd:'111'}));
	console.log(users);
	//multi operations
	var con ;
	try{
        con = yield pool.$getConnection();
        yield con.$beginTransaction();
        yield con.$query("select some");
        yield con.$query("insert some");
        yield con.$query("update some");
        yield con.$commit();
    }catch(e){
        yield con.$rollback();
        console.error(e);
        //to do 
    }finally{
        if(con){
            con.release();
        }
    }
	
	//mongo operations
	var db = yield MongoClient.$connect('mongodb://localhost:27017/test');
	var collection = db.collection('test_users');
	var pUser = yield collection.$insert({name:"tom",age:10});
	var test_users = yield collection.find({name:"tom"}).sort('name').limit(1).$toArray();
	console.log(pUser,test_users);

	//request an url
	var html = (yield request.$request({url:"http://www.google.com"}))[1];
	var getHtml = (yield request.$get("http://www.google.com"))[1];
	console.log(html ,getHtml);
})();
```

##API:
```
var punch = require('co-punch')
```
### punch(modules)
- `module` `{string|array|var args}` - the name of the modules.After punch,old callback function can be call like this style `yield $oldFn(args)`.

Now `co-punch` supports `amqp`,`memcache`,`mongodb`,`mysql`,`nodejs`,`redis`,`request`.
#### After punch:
`fn(args,function(e,r){}) -> var r= yield fn(args);`//if e not null , this will throw an error.

try it now!


'use strict';
module.exports = function(){
	var cofy = require('cofy');
	/**
	mongodb exports interface:
	BSONPure,BSONNative,version,BaseCommand,Admin,Collection,ReadPreference,Connecti
	on,Server,Mongos,ReplSet,MongoClient,Cursor,connect,Db,Grid,Chunk,GridStore,Repl
	SetServers,Binary,Code,DBRef,Double,Long,MinKey,MaxKey,ObjectID,Symbol,Timestamp
	,BSON,native,pure
	*/
	var mongodb = require('mongodb');
	cofy.class(mongodb.MongoClient);
	mongodb.MongoClient.$connect = cofy.fn(mongodb.MongoClient.connect);
	cofy.class(mongodb.Collection);
	cofy.class(mongodb.Connection);
	cofy.class(mongodb.Cursor);
	cofy.class(mongodb.Db);
	cofy.class(mongodb.Admin);
	cofy.class(mongodb.Grid);
	cofy.class(mongodb.Chunk);
	cofy.class(mongodb.GridStore);
	cofy.class(mongodb.ReplSetServers);
	cofy.class(mongodb.ReplSet);
	cofy.class(mongodb.Mongos);
	cofy.class(mongodb.Mongos);
	mongodb.$native = cofy.fn(mongodb.native);
	mongodb.$pure = cofy.fn(mongodb.pure);
};

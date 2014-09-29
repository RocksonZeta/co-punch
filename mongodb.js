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
	cofy(mongodb.MongoClient.prototype);
	mongodb.MongoClient.co_connect = cofy(mongodb.MongoClient.connect);
	cofy(mongodb.Collection.prototype);
	cofy(mongodb.Connection.prototype);
	cofy(mongodb.Cursor.prototype);
	cofy(mongodb.Db.prototype);
	cofy(mongodb.Admin.prototype);
	cofy(mongodb.Grid.prototype);
	cofy(mongodb.Chunk.prototype);
	cofy(mongodb.GridStore.prototype);
	cofy(mongodb.ReplSetServers.prototype);
	cofy(mongodb.ReplSet.prototype);
	cofy(mongodb.Mongos.prototype);
	cofy(mongodb.Mongos.prototype);
	mongodb.co_native = cofy(mongodb.native);
	mongodb.co_pure = cofy(mongodb.pure);
};

'use strict';


var cofy = require('cofy');

exports.co_fs = function (){
	var fs = require('fs');
	var methods = [
	'readFile','close','open','read','write',
	'rename','truncate','ftruncate','rmdir','fdatasync',
	'fsync','mkdir','readdir','fstat','lstat','stat','readlink',
	'symlink','link','unlink','fchmod','chmod','fchown','chown',
	'utimes','futimes','writeFile','appendFile','watch','watchFile',
	'unwatchFile','realpath','createReadStream',
	'createWriteStream'
	];
	fs.co_exists = cofy(fs.exists ,false ,fs);
	return cofy(fs,true,fs,methods);
};

exports.co_child_process = function(){
	var cp = require('child_process');
	var methods = ['exec','execFile'];
	return cofy(cp,true,cp,methods);
};

exports.co_dns = function(){
	return cofy(require('dns'));
};

exports.co_http = function(){
	var http = require('http');
	var httpMethods = ['request', 'get','setTimeout'];
	var httpServerMethods = ['listen', 'close','setTimeout'];
	var httpServerResMethods = ['listen', 'close','setTimeout'];
	var httpServerReqMethods = ['setTimeout'];
	var httpServerMsgMethods = ['setTimeout'];
	cofy(http,false,http,httpMethods);
	cofy(http.Server.prototype,true,null,httpServerMethods);
	cofy(http.ServerResponse.prototype,true,null,httpServerResMethods);
	cofy(http.ClientRequest.prototype,true,null,httpServerReqMethods);
	cofy(http.IncomingMessage.prototype,true,null,httpServerMsgMethods);
	return http;
};

exports.co_https = function(){
	var https = require('https');
	var httpsMethods = ['request', 'get'];
	cofy(https,false,https,httpsMethods);
};
exports.co_zlib = function(){
	var zlib = require('zlib');
	var methods = ['deflate', 'deflateRaw','gzip','gunzip','inflate','inflateRaw','unzip'];
	cofy(zlib,true,zlib,methods);
};



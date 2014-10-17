'use strict';
var cofy = require('cofy');
function co_fs(){
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
	fs.$exists = cofy.fn(fs.exists ,false ,fs);
	return cofy.object(fs,true,methods);
}
function co_child_process(){
	var cp = require('child_process');
	var methods = ['exec','execFile'];
	return cofy.object(cp,true,methods);
}
function co_dns(){
	return cofy.object(require('dns'));
}
function co_http(){
	var http = require('http');
	var httpMethods = ['request', 'get','setTimeout'];
	var httpServerMethods = ['listen', 'close','setTimeout'];
	var httpServerResMethods = ['listen', 'close','setTimeout'];
	var httpServerReqMethods = ['setTimeout'];
	var httpServerMsgMethods = ['setTimeout'];
	cofy.object(http,false,httpMethods);
	cofy.class(http.Server,true,httpServerMethods);
	cofy.class(http.ServerResponse,true,httpServerResMethods);
	cofy.class(http.ClientRequest,true,httpServerReqMethods);
	cofy.class(http.IncomingMessage,true,httpServerMsgMethods);
	return http;
}
function co_https(){
	var https = require('https');
	var httpsMethods = ['request', 'get'];
	cofy.object(https,false,httpsMethods);
}
function co_zlib(){
	var zlib = require('zlib');
	var methods = ['deflate', 'deflateRaw','gzip','gunzip','inflate','inflateRaw','unzip'];
	cofy.object(zlib,true,methods);
}
module.exports = function(){
	var methods = [co_fs,co_child_process , co_dns,co_http,co_https,co_zlib];
	for(var i = 0 ; i < methods.length;i++){
		methods[i]();
	}
};

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
	fs.co_exists = cofy(fs.exists ,false ,fs);
	return cofy(fs,true,fs,methods);
}
function co_child_process(){
	var cp = require('child_process');
	var methods = ['exec','execFile'];
	return cofy(cp,true,cp,methods);
}
function co_dns(){
	return cofy(require('dns'));
}
function co_http(){
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
}
function co_https(){
	var https = require('https');
	var httpsMethods = ['request', 'get'];
	cofy(https,false,https,httpsMethods);
}
function co_zlib(){
	var zlib = require('zlib');
	var methods = ['deflate', 'deflateRaw','gzip','gunzip','inflate','inflateRaw','unzip'];
	cofy(zlib,true,zlib,methods);
}
module.exports = function(){
	var methods = [co_fs,co_child_process , co_dns,co_http,co_https,co_zlib];
	for(var i = 0 ; i < methods.length;i++){
		methods[i]();
	}
};

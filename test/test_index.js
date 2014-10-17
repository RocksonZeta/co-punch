'use strict';
var punch = require('../index.js');

describe("co-punch" , function(){
	it("#punch single" , function(){
		punch('nodejs');
		require('fs').$readFile.should.be.ok;
		require('child_process').$exec.should.be.ok;
	});
	it("#punch multi args" , function(){
		punch('nodejs','mysql');
		require('fs').$readFile.should.be.ok;
		require('child_process').$exec.should.be.ok;
	});
	it("#punch array args" , function(){
		punch(['nodejs','mysql']);
		require('fs').$readFile.should.be.ok;
		require('child_process').$exec.should.be.ok;
	});
});
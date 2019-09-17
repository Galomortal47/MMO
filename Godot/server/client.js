var now = require('performance-now');
var _ = require('underscore');
require('./packet.js')
require('./test.js')
var packet = 'hello';
var client = this;
module.exports = function(){
	
	//these objects will be added at runtime....
	//this.socket = {}
	//this.user = {}
	
	this.initiate = function(){
		//send the conection hand shake to the client
	client = this;
		
		console.log('client initiated')
		//do stuff
	}
	
	this.data = function(data){
		console.log("client connectted " + data.toString()); 
		packet = data;		
		console.log("packet was send " + packet);
		client.socket.write(packet)
	}
	this.error = function(err){
		console.log("client connectted " + err.toString());
	}
	this.end = function(){
		console.log("client closed"); 
	}
	}
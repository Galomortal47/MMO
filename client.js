var now = require('performance-now');
var _ = require('underscore');
require('./packet.js')
require('./test.js')

module.exports = function(){
	
	//these objects will be added at runtime....
	//this.socket = {}
	//this.user = {}
	
	this.initiate = function(ip){
		var client = this;
		//send the conection hand shake to the client
		var packet = 'hello';
		console.log("packet was send " + packet);
		client.socket.write(packet)
		
		console.log('client initiated')
		//do stuff
	}
	
	this.data = function(data){
		console.log("client connectted " + data.toString()); 
	}
	this.error = function(err){
		console.log("client connectted " + err.toString());
	}
	this.end = function(){
		console.log("client closed"); 
	}
	}
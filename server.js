
//import required libaries
require(__dirname+'/Resources/config.js');
var fs = require('fs');
var net = require('net');

net.createServer(function(socket){

console.log("socket connectted")

	socket.on('error', function(err){
		console.log("socket connectted " + err,toString()); 
	});
	socket.on('end', function(){
		console.log("socket closed"); 
	});
	socket.on('data', function(data){
		console.log("socket connectted " + data,toString()); 
	});
}).listen(config.port);

console.log("Initizlie complete server runing on port: " + config.port + " for env " +config.environment);
//console.log(maps)
//console.log(config.database);

//1. load the initilizers
//2. load data models data
//3. load maps
//4. intniatiate the server and listen to internet
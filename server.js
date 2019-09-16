
//import required libaries
require(__dirname+'/Resources/config.js');
var fs = require('fs');
var net = require('net');
require('./packet.js')

net.createServer(function(socket){

console.log("socket connected")
// socket.write('hello')

var c_inst = new require('./client.js');
var thisClient = new c_inst();


thisClient.socket = socket;
thisClient.initiate(socket.address().address);


	socket.on('error', thisClient.error); 
	socket.on('end', thisClient.end);  
	socket.on('data', thisClient.data);  
}).listen(config.port);

console.log("2 Initizlie complete server runing on port: " + config.port + " for env " +config.environment);
//console.log(maps)
//console.log(config.database);

//1. load the initilizers
//2. load data models data
//3. load maps
//4. intniatiate the server and listen to internet
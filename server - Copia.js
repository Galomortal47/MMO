
//import required libaries
require(__dirname+'/Resources/config.js');
var fs = require('fs');
var net = require('net');

//load the initializers
var init_files = fs.readdirSync(__dirname+"/Initializers");
init_files.forEach(function(initFiles){
console.log('loading initializers' + initFiles);
require(__dirname + "/Initializers/" + initFiles);
})
//load models
var model_files = fs.readdirSync(__dirname+"/Models");
model_files.forEach(function(modelFiles){
console.log('loading Models' + modelFiles);
require(__dirname + "/Models/" + modelFiles);
})
//load maps
maps = {};
var map_files = fs.readdirSync(config.data_paths.maps);
map_files.forEach(function(mapFiles){
console.log('loading map' + mapFiles);
var map = require(config.data_paths.maps + mapFiles);
maps[map.room] = map
})

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
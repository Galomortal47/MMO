var net = require('net');
require(__dirname+'/Resources/config.js');

module.exports = function(){
	this.sendpack(ip){
	//these objects will be added at runtime....
	//this.socket = {}
	//this.user = {}
	var packet = 'hello';
	var client = this;
		//send the conection hand shake to the client
		console.log("packet was send " + packet);
	const connect = net.createConnection(config.port,ip);
		connect.write(packet);

		// client.socket.write(packet)
		
		console.log('client initiated')
		//do stuff
	}
}
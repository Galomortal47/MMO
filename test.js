var net = require('net');
require(__dirname+'/Resources/config.js');


	//these objects will be added at runtime....
	//this.socket = {}
	//this.user = {}
	var packet = 'jag';
	var client = this;
		//send the conection hand shake to the client
		console.log("packet was send " + packet);
	const connect = net.createConnection(config.port,"34.69.136.132");
		connect.write(packet);
	connect.on('data', function (data) {
        console.log('Server return data : ' + data);
    });
		// client.socket.write(packet)
		
		console.log('client initiated')
		//do stuff
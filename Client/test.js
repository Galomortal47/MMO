var net = require('net');


	//these objects will be added at runtime....
	//this.socket = {}
	//this.user = {}
	var packet = 'jag';
	var client = this;
		//send the conection hand shake to the client
		console.log("packet was send " + packet);
	const connect = net.createConnection(8082,"34.69.136.132");
		connect.write(packet);
	connect.on('data', function (data) {
        console.log('Server return data : ' + data);
    });
		// client.socket.write(packet)
		
		console.log('client initiated')
		//do stuff
var net = require('net');

var HOST = '::1';
var PORT = 8082;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('READER_FWD');
    //client.end();
});

client.on('data', function(data) {
    console.log('DATA: ' + data);
    //client.destroy();
    // 

    if (data == 'ACK')
    {
        console.log('DATA1: ' + data);
        client.end();
        console.log('DATA2: ' + data);
        client.connect(PORT, HOST, function() {
            console.log('CONNECTED TO: ' + HOST + ':' + PORT);
            client.write('READER_BWD');
            //client.end();
            console.log('DATA3: ' + data);
        });

    }
    client.end();
});

client.on('end', function() {
    console.log('disconnected from server');
});

client.on('error', function(err) {
   console.log(err)
});
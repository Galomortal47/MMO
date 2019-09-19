var PORT = 33333;
var HOST = '127.0.0.1';
var PORT2 = 33334;
var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
 console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function(message, remote) {
var msg = new Buffer(JSON.stringify(message));
console.log(remote.address + ':' + remote.port +' - ' + msg);
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
client.send(msg, 0, msg.length, PORT2, HOST, function(err, bytes) {
  if (err) throw err;
  console.log('UDP message sent to ' + HOST +':'+ PORT2);
  client.close();
});
});

server.bind(PORT, HOST);


extends Node

var packet = StreamPeerTCP.new()
var i = 0
var json = {
	"pos_x":10,
	"pos_y":10
}

func _ready():
	packet.connect_to_host( "34.69.136.132", 8082)
#	packet.connect_to_host( "34.69.136.132", 8082 )
	print("connected")

func _process(delta):
	var peerstream = PacketPeerStream.new()
	peerstream.set_stream_peer(packet)
	if peerstream.get_available_packet_count() > 0:
		var data = (peerstream.get_packet())
		print(data.get_string_from_ascii())
	else:
		packet.put_string(str(json))

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

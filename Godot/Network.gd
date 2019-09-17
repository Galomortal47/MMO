extends Node

var path = "res://save.json"

var file = File.new()
var packet = StreamPeerTCP.new()
var i = 0
var data
var string
var json2
var json = {
	"p1": {
	"pos_x":00,
	"pos_y":00
	},
	"p2": {
	"pos_x":00,
	"pos_y":00
	}
}

func _ready():
	json2 = json
	packet.connect_to_host( "34.69.136.132", 8082)
#	packet.connect_to_host( "34.69.136.132", 8082 )
	print("connected")

func _process(delta):
	for i in range(0,get_child_count()):
		if get_child(i).main:
			json.p1.pos_x = get_child(i).motion.x
			json.p1.pos_y = get_child(i).motion.y
#			json.p1.pos_x = get_child(i).get_position().x
#			json.p1.pos_y = get_child(i).get_position().y
		else:
			get_child(i).motion.x = json.p2.pos_x
			get_child(i).motion.y = json.p2.pos_y
#			get_child(i).set_position(Vector2(json.p2.pos_x,json.p2.pos_y))
	var peerstream = PacketPeerStream.new()
	peerstream.set_stream_peer(packet)
	if peerstream.get_available_packet_count() > 0:
		data = (peerstream.get_packet())
		string = data.get_string_from_ascii()
		json2 = parse_json(string)
		json.p2.pos_x = json2.p1.pos_x
		json.p2.pos_y = json2.p1.pos_y
	else:
		packet.put_string(to_json(json))

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

extends Node

var path = "res://save.json"

var file = File.new()
var packet = StreamPeerTCP.new()
var i = 0
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
	packet.connect_to_host( "34.69.136.132", 8082)
#	packet.connect_to_host( "34.69.136.132", 8082 )
	print("connected")

func _process(delta):
	for i in range(0,get_child_count()):
		if get_child(i).main:
			json.p1.pos_x = get_child(i).get_position().x
			json.p1.pos_y = get_child(i).get_position().y
			save()
		else:
			loader()
			get_child(i).set_position(Vector2( json.p1.pos_x+100,json.p1.pos_y))
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
func save():
	if file.open(path, File.WRITE) != 0:
		return
	file.store_line(to_json(json))
	file.close()
#	pass

func loader():
	if file.open(path, File.READ) != 0:
		return
	json = parse_json(file.get_line())
	file.close()
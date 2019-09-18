extends Node

var path = "res://save.json"
var file = File.new()
var packet = PacketPeerUDP.new()
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
var port = 8083

func _ready():
	json2 = json
	packet.set_dest_address( "127.0.0.1", port)
	packet.listen(  port, "*")
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
	if packet.get_available_packet_count() > 0:
		data = (packet.get_packet())
		print(data)
		string = data.get_string_from_ascii()
		print(string)
		json2 = parse_json(string)
#		print(json2)
#		json.p2.pos_x = json2.p1.pos_x
#		json.p2.pos_y = json2.p1.pos_y
	else:
		packet.put_var(to_json(json))

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

extends Node

var packet = StreamPeerTCP.new()
var i = 0
func _ready():
	packet.connect_to_host( "::1", 8082 )

var json = {
	"lv":3,
	"hp":4,
	"pos_x":0,
	"pos_y":0
}

func _process(delta):
	packet.put_string(str(json))
# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

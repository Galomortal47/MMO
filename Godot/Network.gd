extends Node

var packet = StreamPeerTCP.new()
var i = 0
func _ready():
	packet.connect_to_host( "34.69.136.132", 8082 )

func _process(delta):
	packet.put_string(str(i))
	i+=1
# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

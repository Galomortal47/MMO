extends Node

var packet = StreamPeerTCP.new()

func _ready():
	packet.connect_to_host( "::1", 8082 )

func _process(delta):
	packet.put_string("jag")
# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

extends Node

var socket = TCP_Server.new()
var i = 0
var packet
var init = true

func _ready():
	socket.listen(8084)
	packet = socket.take_connection()
	print("listening")

func _process(delta):
	if socket.is_connection_available():
		if init:
			packet = socket.take_connection()
			init = false
	if not packet == null:
		var data = packet.get_data(1023)
#		print(data)
		print(data)
#	if not packet == null:
#		print(packet.get_string())
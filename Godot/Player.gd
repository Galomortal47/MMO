extends KinematicBody2D

# Declare member variables here. Examples:
# var a = 2
# var b = "text"
var motion = Vector2()
export var main = true
export var id = "res://save.json"
var speed = 200
# Called when the node enters the scene tree for the first time.
func _process(delta):
	if main:
		if Input.is_action_pressed("ui_up"):
			motion.y = -speed
		elif Input.is_action_pressed("ui_down"):
			motion.y = speed
		elif Input.is_action_pressed("ui_right"):
			motion.x = speed
		elif Input.is_action_pressed("ui_left"):
			motion.x = -speed
		else:
			motion = Vector2(0,0)
	motion = move_and_slide(motion)
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

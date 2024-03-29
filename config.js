var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

var environment = args.env || "test";

console.log(environment)

var common_conf = {
		name: "mmo game server",
		version: "0.0.1",
		environment:environment,
		max_players: 100,
		data_paths:{
			items:__dirname + "\\Game Data\\" + "Items\\",
			maps: __dirname + "\\Game Data\\" + "Maps\\"
		},
		starting_zone: "rm_map_home"
};


//Enviroment specif configuration
var conf = {
	production:{
		ip: args.ip || "0.0.0.0",
		port: args.port || 8081,
		database: "mongodn://127.0.0.1/mmo_prod"
	},

	test:{
		ip: args.ip || "0.0.0.0",
		port: args.port || 8082,
		database: "mongodn://127.0.0.1/mmo_test"
	}
};

extend(false,conf.production,common_conf);
extend(false,conf.test,common_conf);

module.exports = config = conf[environment];
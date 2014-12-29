var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var http = require('http');
var cookieParser = require('cookie-parser');
var config = require('./config/config');
var app = express();
require('./config/db')(config);
var modelsPath = __dirname + '/server/models';
fs.readdirSync(modelsPath).forEach(function (file) {
	if (file.indexOf('.js') >= 0) {
		require(modelsPath + '/' + file);
	}
});
require('./config/express')(app, config);
require('./middleware')(app);
var server = http.Server(app);
server.listen(config.port);
console.log('App started on port ' + config.port); 
//console.log('app.router: ' + app.router);
//console.log('app._dispatch: ' + _dispatch);

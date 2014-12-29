var express = require('express');
var MongoStore = require('connect-mongo')(express);
module.exports = function(app, config) {
	app.configure(function () {
			app.use(express.compress());
			app.set('port', config.port);
			app.use(express.logger('dev'));
//SESSIONS
			app.use(express.cookieParser());
			app.use(express.session({
				store: new MongoStore({
					url: config.db + '_sessions'
				}),
				secret: 'thisisasecret'
			}));
			//app.use(express.session({secret: '1234567890QWERTY'}));
			app.use(express.bodyParser());
//			app.use(express.methodOverride());
//			app.use('/api', app.router);
//			app.use('/', express.static(__dirname + "/../client"));
			});
};

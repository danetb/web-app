//var express = require('express');
var compress = require('compression');
var session = require('express-session');
var logger = require('morgan');
var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var MongoStore = require('connect-mongo')(session);
//var passport = require('passport');

module.exports = function(app, config, passport) {
			app.use(compress({
				threshold: 1024
			}));
			app.set('port', config.port);
			app.use(logger('dev'));
			app.use(cookieParser());
			app.use(bodyParser());
//SESSIONS
			app.use(session({
				/*
				store: new MongoStore({
					url: config.db + '_sessions'
				}),
				*/
				secret: 'thisisasecret'
			}));
			app.use(flash());
			app.use(passport.initialize());
			app.use(passport.session());
//			app.use(express.methodOverride());
//			app.use('/api', app.router);
//			app.use('/', express.static(__dirname + "/../client"));
}

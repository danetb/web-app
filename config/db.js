var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);
	console.log('did connect on ' + config.db);
	var db = mongoose.connection;
	db.on('error', function() {
		throw new Error('Unable to connect to db at ' + config.db);
	});
};

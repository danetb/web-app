var User = require('../server/models/Users');
module.exports = function(passport) {
	passport.serializeUser(function(user, done) {
		console.log('serializing user: ');
		console.log(user);
		done(null, user._id);
	});
	passport.deserializeUser(function(user, done) {
		User.findById(id, function(err, user) {
			console.log('deserializing user:',user);
			done(err, user);
		})
	})
	require('strategies/sign_up')(passport);
	require('strategies/sign_in')(passport);
}
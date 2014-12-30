var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, User) {
	passport.use('sign_in', new LocalStrategy({
		passReqToCallback: true
	}),
	function(req, email, password, done) {
		User.findOne({'email': email}, function(err, user) {
			if(err) {
				console.log('Error getting user in sign_in.');
				return done(err);
			}
			if(user) {
				if(userHasPassword(user, password)) {
					return done(null, user);
				}
				return done(null, false, req.flash('message', 'Invalid password for user')); 
			}
			return done(null, false, req.flash('message', 'User doesn not exist'));
		})
	});
	var userHasPassword = function(user, password) {
		return bCrypt.compareSync(password, user.password);
	}
}


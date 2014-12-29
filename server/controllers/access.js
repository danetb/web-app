var mongoose = require('mongoose');
var User = mongoose.model('User');
var Thread = mongoose.model('Thread');
var Tag = mongoose.model('Tag');
exports.sign_up = function(email, password, fn) {
	console.log('rest.sign_up()');
}
exports.sign_in = function(auth, password, fn) {
	console.log('rest.sign_in()');
}
exports.sign_out = function(auth, fn) {
	console.log('rest.sign_out');
}
exports.tag_comment = function(req, res) {
	console.log('rest.tag_comment()');
}
exports.create_thread = function(req, res) {
	    console.log('rest.create_thread()');
}
exports.get_user_posts = function(req, res) {
	    console.log('rest.get_user_posts()');
}
exports.get_user_feed = function(req, res) {
	    console.log('rest.get_user_feed()');
		
}
exports.get_thread = function(req, res) {
	    console.log('rest.get_thread()');
}



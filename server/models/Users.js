var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var UserData = new Schema({
	feed: [ObjectId], //Thread ids.
	posts: [ObjectId] //Thread ids.
});
mongoose.model('UserData', UserData);
var User = new Schema({
	userdata: ObjectId, //UserData id.
	type: Number,
	email: String,
	password: String
});
mongoose.model('User', User);

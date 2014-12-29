var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Thread = new Schema({
	taggings:[{creator_uid:ObjectId, comment_index:Number}],
	comments:[{creator_uid:ObjectId, content:String, base_index:Number}],
	created: Date,
	creator_uid:ObjectId,
	title: String,
	content: String
});
mongoose.model('Thread', Thread);


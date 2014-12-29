var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var TagData = new Schema({
	alltags:[{applier_uid: ObjectId, receiver_uid: ObjectId}]
});
mongoose.model('TagData', TagData);
var Tag = new Schema({
	tagname: String,
	_tagobject: ObjectId
});
mongoose.model('Tag', Tag);

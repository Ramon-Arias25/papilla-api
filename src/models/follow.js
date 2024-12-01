const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    followerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    followedId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Follow', FollowSchema);

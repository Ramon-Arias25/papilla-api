const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recipeId: { type: Schema.Types.ObjectId, ref: 'Recipe', required: true },
    content: { type: String, required: true },
    commentDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);

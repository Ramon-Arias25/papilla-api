const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recipeId: { type: Schema.Types.ObjectId, ref: 'Recipe', required: true }
});

module.exports = mongoose.model('Favorite', FavoriteSchema);

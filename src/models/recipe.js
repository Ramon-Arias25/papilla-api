const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: { type: String, required: true },
    ingredients: [String],
    instructions: String,
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isPublic: { type: Boolean, default: false }
});

if (mongoose.models.Recipe) {
    delete mongoose.models.Recipe;
}

module.exports = mongoose.model('Recipe', RecipeSchema);
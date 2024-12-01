const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    name: { type: String, required: true },
    ingredients: [{
        ingredientId: { type: Schema.Types.ObjectId, ref: 'Ingredient' },
        quantity: { type: Number, required: true }
    }],
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isPublic: { type: Boolean, default: false }
});

module.exports = mongoose.model('Recipe', RecipeSchema);

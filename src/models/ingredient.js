const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String, // Nombre del ingrediente
    quantity: Number,
    unit: { type: String, required: true }
});

module.exports = mongoose.model('Ingredient', IngredientSchema);

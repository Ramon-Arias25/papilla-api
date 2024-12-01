const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoppingListSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        ingredientId: { type: Schema.Types.ObjectId, ref: 'Ingredient' },
        quantity: { type: Number, required: true }
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ShoppingList', ShoppingListSchema);

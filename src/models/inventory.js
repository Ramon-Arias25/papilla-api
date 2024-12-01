const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    restaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    ingredients: [{
        ingredientId: { type: Schema.Types.ObjectId, ref: 'Ingredient' },
        quantity: { type: Number, required: true }
    }]
});

module.exports = mongoose.model('Inventory', InventorySchema);

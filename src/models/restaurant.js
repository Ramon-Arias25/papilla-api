const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);

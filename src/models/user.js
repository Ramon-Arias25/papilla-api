const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userType: { type: String, enum: ['restaurant', 'domestic'], required: true },
    isActive: { type: Boolean, default: true },
    registrationDate: { type: Date, default: Date.now },
    auth0Id: { type: String, required: true, unique: true },
    picture: { type: String }
});

module.exports = mongoose.model('User', UserSchema);
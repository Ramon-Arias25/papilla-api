const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanningSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
});

module.exports = mongoose.model('Planning', PlanningSchema);

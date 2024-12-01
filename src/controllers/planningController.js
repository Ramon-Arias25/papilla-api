const Planning = require('../models/Planning');

exports.createPlanning = async (req, res) => {
    try {
        const planning = new Planning(req.body);
        await planning.save();
        res.status(201).json(planning);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPlanning = async (req, res) => {
    try {
        const planning = await Planning.findById(req.params.id);
        if (!planning) return res.status(404).json({ message: 'Planning not found' });
        res.json(planning);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePlanning = async (req, res) => {
    try {
        const planning = await Planning.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!planning) return res.status(404).json({ message: 'Planning not found' });
        res.json(planning);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePlanning = async (req, res) => {
    try {
        const planning = await Planning.findByIdAndDelete(req.params.id);
        if (!planning) return res.status(404).json({ message: 'Planning not found' });
        res.json({ message: 'Planning deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

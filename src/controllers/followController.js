const Follow = require('../models/Follow');

exports.createFollow = async (req, res) => {
    try {
        const follow = new Follow(req.body);
        await follow.save();
        res.status(201).json(follow);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getFollow = async (req, res) => {
    try {
        const follow = await Follow.findById(req.params.id);
        if (!follow) return res.status(404).json({ message: 'Follow not found' });
        res.json(follow);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFollow = async (req, res) => {
    try {
        const follow = await Follow.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!follow) return res.status(404).json({ message: 'Follow not found' });
        res.json(follow);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFollow = async (req, res) => {
    try {
        const follow = await Follow.findByIdAndDelete(req.params.id);
        if (!follow) return res.status(404).json({ message: 'Follow not found' });
        res.json({ message: 'Follow deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

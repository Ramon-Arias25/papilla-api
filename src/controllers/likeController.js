const Like = require('../models/Like');

exports.createLike = async (req, res) => {
    try {
        const like = new Like(req.body);
        await like.save();
        res.status(201).json(like);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getLike = async (req, res) => {
    try {
        const like = await Like.findById(req.params.id);
        if (!like) return res.status(404).json({ message: 'Like not found' });
        res.json(like);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateLike = async (req, res) => {
    try {
        const like = await Like.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!like) return res.status(404).json({ message: 'Like not found' });
        res.json(like);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteLike = async (req, res) => {
    try {
        const like = await Like.findByIdAndDelete(req.params.id);
        if (!like) return res.status(404).json({ message: 'Like not found' });
        res.json({ message: 'Like deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

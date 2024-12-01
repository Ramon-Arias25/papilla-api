const Favorite = require('../models/favorite');

exports.createFavorite = async (req, res) => {
    try {
        const favorite = new Favorite(req.body);
        await favorite.save();
        res.status(201).json(favorite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.findById(req.params.id);
        if (!favorite) return res.status(404).json({ message: 'Favorite not found' });
        res.json(favorite);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!favorite) return res.status(404).json({ message: 'Favorite not found' });
        res.json(favorite);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteFavorite = async (req, res) => {
    try {
        const favorite = await Favorite.findByIdAndDelete(req.params.id);
        if (!favorite) return res.status(404).json({ message: 'Favorite not found' });
        res.json({ message: 'Favorite deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

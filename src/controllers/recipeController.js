const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json({ message: 'Recipe deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getPublicRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({ isPublic: true }).populate('ownerId', 'name');
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({ $or: [{ ownerId: req.user.id }, { isPublic: true }] }).populate('ownerId', 'name');
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
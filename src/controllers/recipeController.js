const Recipe = require('../models/recipe');
const ingredient = require('../models/ingredient');

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

exports.getRecipesByIngredients = async (req, res) => {
    try {
        const userId = req.params.userId;
        const ingredient = await ingredient.find({ userId });
        const ingredientNames = ingredient.map(ingredient => ingredient.name);
        const recipes = await recipe.find({
            ingredients: { $in: ingredientNames }
        });

        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener recetas', error });
    }
};
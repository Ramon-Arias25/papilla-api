const Inventory = require('../models/Inventory');
const Recipe = require('../models/recipe');

exports.createInventory = async (req, res) => {
    try {
        const inventory = new Inventory(req.body);
        await inventory.save();
        res.status(201).json(inventory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id).populate('ingredients.ingredientId');
        if (!inventory) return res.status(404).json({ message: 'Inventory not found' });
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!inventory) return res.status(404).json({ message: 'Inventory not found' });
        res.json(inventory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findByIdAndDelete(req.params.id);
        if (!inventory) return res.status(404).json({ message: 'Inventory not found' });
        res.json({ message: 'Inventory deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateInventoryAfterRecipe = async (req, res) => {
    try {
        const { recipeId, userId } = req.body;
        const recipe = await Recipe.findById(recipeId).populate('ingredients.ingredientId');

        for (let item of recipe.ingredients) {
            const ingredient = await Inventory.findOne({
                userId,
                'ingredients.ingredientId': item.ingredientId
            });
            if (!ingredient || ingredient.quantity < item.quantity) {
                return res.status(400).json({
                    message: `Insufficient quantity of ${item.ingredientId.name} in inventory`
                });
            }
        }

        for (let item of recipe.ingredients) {
            await Inventory.updateOne(
                { userId, 'ingredients.ingredientId': item.ingredientId },
                { $inc: { 'ingredients.$.quantity': -item.quantity } }
            );
        }

        res.json({ message: 'Inventory updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

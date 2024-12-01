const ShoppingList = require('../models/ShoppingList');
const Ingredient = require('../models/ingredient');

exports.createShoppingList = async (req, res) => {
    try {
        const { userId, items } = req.body;
        const shoppingList = new ShoppingList({ userId, items });
        await shoppingList.save();
        res.status(201).json(shoppingList);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getShoppingList = async (req, res) => {
    try {
        const shoppingList = await ShoppingList.findById(req.params.id).populate('items.ingredientId');
        if (!shoppingList) return res.status(404).json({ message: 'Shopping list not found' });
        res.json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.autoGenerateShoppingList = async (req, res) => {
    try {
        const { userId, recipes } = req.body;
        const shoppingList = [];

        for (let recipeId of recipes) {
            const recipe = await Recipe.findById(recipeId).populate('ingredients.ingredientId');
            for (let item of recipe.ingredients) {
                const ingredientInInventory = await Inventory.findOne({
                    userId,
                    'ingredients.ingredientId': item.ingredientId
                });
                const neededQuantity = item.quantity - (ingredientInInventory?.quantity || 0);

                if (neededQuantity > 0) {
                    shoppingList.push({ ingredientId: item.ingredientId, quantity: neededQuantity });
                }
            }
        }

        const newList = new ShoppingList({ userId, items: shoppingList });
        await newList.save();
        res.status(201).json(newList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

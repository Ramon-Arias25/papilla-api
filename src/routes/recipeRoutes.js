const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/', recipeController.createRecipe);
router.get('/public', recipeController.getPublicRecipes);
router.get('/user', recipeController.getUserRecipes);
router.get('/:id', recipeController.getRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);
router.get('/by-ingredients/:userId', recipeController.getRecipesByIngredients);

module.exports = router;

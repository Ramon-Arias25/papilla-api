const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');

router.post('/', ingredientController.createIngredient);
router.get('/:id', ingredientController.getIngredient);
router.put('/:id', ingredientController.updateIngredient);
router.delete('/:id', ingredientController.deleteIngredient);

module.exports = router;

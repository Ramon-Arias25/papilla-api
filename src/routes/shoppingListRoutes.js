const express = require('express');
const router = express.Router();
const shoppingListController = require('../controllers/shoppingListController');

router.post('/', shoppingListController.createShoppingList);
router.get('/:id', shoppingListController.getShoppingList);
router.post('/auto-generate', shoppingListController.autoGenerateShoppingList);

module.exports = router;

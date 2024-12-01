const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/', inventoryController.createInventory);
router.get('/:id', inventoryController.getInventory);
router.put('/:id', inventoryController.updateInventory);
router.put('/update-after-recipe', inventoryController.updateInventoryAfterRecipe);
router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;

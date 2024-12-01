const express = require('express');
const router = express.Router();
const planningController = require('../controllers/planningController');

router.post('/', planningController.createPlanning);
router.get('/:id', planningController.getPlanning);
router.put('/:id', planningController.updatePlanning);
router.delete('/:id', planningController.deletePlanning);

module.exports = router;

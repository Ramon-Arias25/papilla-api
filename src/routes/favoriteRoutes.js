const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoriteController');

router.post('/', favoriteController.createFavorite);
router.get('/:id', favoriteController.getFavorite);
router.put('/:id', favoriteController.updateFavorite);
router.delete('/:id', favoriteController.deleteFavorite);

module.exports = router;

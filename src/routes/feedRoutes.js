const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feedController');

router.get('/', feedController.getFeed);
router.get('/popular', feedController.getPopularRecipes);

module.exports = router;

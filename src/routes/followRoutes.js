const express = require('express');
const router = express.Router();
const followController = require('../controllers/followController');

router.post('/', followController.createFollow);
router.get('/:id', followController.getFollow);
router.put('/:id', followController.updateFollow);
router.delete('/:id', followController.deleteFollow);

module.exports = router;

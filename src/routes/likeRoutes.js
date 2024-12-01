const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.post('/', likeController.createLike);
router.get('/:id', likeController.getLike);
router.put('/:id', likeController.updateLike);
router.delete('/:id', likeController.deleteLike);

module.exports = router;

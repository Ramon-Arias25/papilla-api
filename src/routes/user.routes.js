const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/user.controller'); 
router.get('/example', userController.example); 
module.exports = router; 

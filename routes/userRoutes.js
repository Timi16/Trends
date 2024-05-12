
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
// Route for user registration
router.post('/register', userController.registerUser);

// Route for user login
router.post('/login', userController.loginUser);

// Route to get user profile by user name 
router.get('/profile/:username', userController.getUserProfile);

module.exports = router;

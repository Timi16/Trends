const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment
router.post('/comment', commentController.createComment);

// Get all comments
router.get('/comments', commentController.getAllComments);

module.exports = router;
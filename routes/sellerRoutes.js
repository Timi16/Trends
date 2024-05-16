// sellerRoutes.js
const sellerController = require('../controllers/sellerController');
const express = require('express');
const router = express.Router();


// Route for creating a new seller
router.post('/sellers', sellerController.createSeller);

module.exports = router;

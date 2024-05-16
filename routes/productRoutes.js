const express = require('express');
const router = express.Router();
const multer = require('multer'); // For handling file uploads
const upload = multer(); // Initialize multer

const productController = require('../controllers/productController');

// POST /api/products
router.post('/products', upload.array('images'), productController.createProduct);

module.exports = router;

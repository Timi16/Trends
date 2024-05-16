const { Product } = require('../models/User');
const fs = require('fs');

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    // Extract product data from the request body
    const { name, price, stock } = req.body;

    // Extract image data
    const images = req.files.map(file => ({
      data: file.data,
      contentType: file.mimetype
    }));

    // Create the product
    const product = new Product({
      name,
      price,
      stock,
      images
    });

    // Save the product to the database
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createProduct
};

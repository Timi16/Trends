
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const sellerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    brandName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    }
});
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    images: [{
        data: Buffer, // Storing image data directly
        contentType: String // Mime type of the image
    }]
});

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user who made the comment
    required: true
  },
  content: {
    type: String,
    required: true
  },
});

module.exports = {
    User: mongoose.model('User', userSchema),
    Seller: mongoose.model('Seller', sellerSchema),
    Product: mongoose.model('Product', productSchema),
   Comment: mongoose.model('Comment', commentSchema)
};
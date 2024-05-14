
const {Seller, User} = require('../models/User');

// Controller function to create a new seller
const createSeller = async (req, res) => {
    try {
        // Extract seller details from request body
        const { username, brandName, phoneNumber, accountNumber } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user is already a seller
        if (user.role === 'seller') {
            return res.status(400).json({ message: 'User is already a seller' });
        }

        // Update the user to be a seller
        user.role = 'seller';
        user.brandName = brandName;
        user.phoneNumber = phoneNumber;
        user.accountNumber = accountNumber;
        await user.save();

        // Return the updated user (seller)
        res.status(201).json({ seller: user });
    } catch (error) {
        console.error('Error creating seller:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createSeller
};

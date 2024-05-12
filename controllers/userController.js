const User = require('../models/User');
const jwt = require('jsonwebtoken');
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log('Received registration request:', { username, email });

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      console.log('User already exists');
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({
      username,
      email,
      password  // Store password as plain text
    });

    // Save user to database
    await user.save();

    console.log('User registered successfully:', user);

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).send('Server Error');
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Login failed: User not found');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Validate password
    if (user.password !== password) {
      console.log('Login failed: Invalid password');
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    console.log('Login successful');
    res.json({ token });
  } catch (err) {
    console.error('Error logging in:', err.message);
    res.status(500).send('Server Error');
  }
};

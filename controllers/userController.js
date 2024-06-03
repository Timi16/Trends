//const User = require('../models/User');
const { User } = require('../models/User');
const jwt = require('jsonwebtoken');
const blacklist = new Set();
const registerUser= async (req, res) => {
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
     const token = jwt.sign({ userId: user._id, username: user.username }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token, username: user.username });
  } catch (err) {
    console.error('Error registering user:', err.message);
    res.status(500).send('Server Error');
  }
};

const loginUser = async (req, res) => {
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
    res.json({ token, username: user.username });
  } catch (err) {
    console.error('Error logging in:', err.message);
    res.status(500).send('Server Error');
  }
};

const getUserByUsername = async (username) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    console.error('Error fetching user by username:', error.message);
    return null;
  }
};
// Route to fetch user by username
const getUserProfile = async (req, res) => {
  const receiverUsername = req.params.username;
  try {
    const receiver = await getUserByUsername(receiverUsername);
    if (!receiver) {
      return res.status(404).json({ error: 'Receiver not found' });
    }
    res.json(receiver);
  } catch (error) {
    console.error('Error fetching receiver data:', error.message);
    res.status(500).json({ error: 'Server Error' });
  }
};
// Logout endpoint
const logoutUser = async (req, res) => {
  try {
    const token = req.headers.authorization; // Assuming token is passed in the Authorization header

    // Check if token is present
    if (!token) {
      return res.status(401).json({ msg: 'Token is required' });
    }

    // Add token to blacklist
    blacklist.add(token);

    console.log('User logged out successfully');
    res.json({ msg: 'User logged out successfully' });
  } catch (err) {
    console.error('Error logging out user:', err.message);
    res.status(500).send('Server Error');
  }
};

// Middleware to check token against blacklist
const checkTokenBlacklist = (req, res, next) => {
  const token = req.headers.authorization; // Assuming token is passed in the Authorization header

  // Check if token is present and blacklisted
  if (token && blacklist.has(token)) {
    return res.status(401).json({ msg: 'Token is invalid' });
  }

  // Token is valid, continue to the next middleware
  next();
};

module.exports = {
  registerUser,
  loginUser,
  getUserByUsername,
  getUserProfile,
  logoutUser,
  checkTokenBlacklist,
};
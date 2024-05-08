
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const connection = require('./db');
const jwt = require('jsonwebtoken');
// Register new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the username or email already exists
    const [existingUsers] = await connection.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);

    if (existingUsers.length > 0) {
      // If username or email already exists, return error
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash password with salt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into database
    await connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
    
    // Return success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'An error occurred while registering user' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username exists
    const [users] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);

    if (users.length === 0) {
      // If username does not exist, return error
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare passwords
    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // If passwords don't match, return error
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // If passwords match, generate JWT token
    const token = jwt.sign({ username: user.username, userId: user.id }, 'your_secret_key', { expiresIn: '1h' });

    // Return token and user details
    res.status(200).json({ token, userId: user.id, username: user.username });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const user = new User({ firstname, lastname, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Registration failed', details: err });
  }
});
// POST /api/users/login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.status(200).json({
        message: 'Login successful',
        user: {
          firstname: user.firstname, // lowercase!
          email: user.email
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
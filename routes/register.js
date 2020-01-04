const User = require('../models/user');
const Token = require('../utils/token');

// Create New Router for Request Handlings
const router = require('express').Router();

// Add Function to Login User into Service
router.post('/', async (req, res) => {
  let username = (req.body.username || "").toLowerCase();
  let password = req.body.password;

  try {
    existingUser = await User.findOne({username})
    // Check user exists
    if (existingUser == null) {
      const user = new User({username, password});
      const newUser = await user.save();
      const userid = newUser._id;
      const token = await Token.sign({username, userid});
      res.json({token});
    } else {
      return res.status(404).json({ msg: 'User already exists'});
    }
  } catch(err){
    return res.status(500).json({ msg: err.message })
  }
});

// Export Router Configuration
module.exports = router;
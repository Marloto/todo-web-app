const User = require('../models/user');
const Token = require('../utils/token');

// Create New Router for Request Handlings
const router = require('express').Router();

// Add Function to Login User into Service
router.post('/', async (req, res) => {
  let username = (req.body.username || "").toLowerCase();
  let password = req.body.password;

  try {
    user = await User.findOne({username})
    // Check user exists
    if (user == null) {
      return res.status(404).json({ msg: 'Cant find user'})
    }
    if(user.password != password) {
      return res.status(404).json({ msg: 'Cant find user'})
    }
    const userid = user._id;
    const token = await Token.sign({username, userid});
    res.json({token});
  } catch(err){
    return res.status(500).json({ msg: err.message })
  }
});

// Export Router Configuration
module.exports = router;
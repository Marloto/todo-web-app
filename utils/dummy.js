const token = require('./token');

module.exports = (req, res, next) => {
  req.username = "dummy";
  req.userid = "1234567890";
  next();
}
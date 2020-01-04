const token = require('./token');

module.exports = (req, res, next) => {
    var t = req.body.token || req.query.token || req.headers["x-access-token"];
    if (t) {
        token.verify(t).then(data => {
          req.username = data.username;
          req.userid = data.userid;
          next();
        }).catch(err => {
            res.status(403).send({});
        });
    } else {
      res.status(403).send({});
    }
}
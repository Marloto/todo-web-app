const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || "foobar";

var sign = (data) => {
    return new Promise((resolve, reject) => {
        jwt.sign({data}, secret, { expiresIn: 60 * 60 }, function(err, token) {
            if(err) return reject(err);
            resolve(token);
        });
    });
};

var verify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, function (err, decoded) {
            if(err) return reject(err);
            resolve(decoded.data);
        });
    });
}

module.exports = {
  sign, verify
}
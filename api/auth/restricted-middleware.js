const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res.status(401).json("Valid Token Required For Access");
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    res.status(401).json("Access Denied, You need a Valid Token");
  }
};

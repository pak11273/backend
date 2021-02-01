const { jwtSecret } = require("../../config/secrets.js");
const jwt = require("jsonwebtoken");

module.exports = {
  errorHandler,
  validateUser,
  validateUserId,
  generateToken,
};

function errorHandler(error, req, res) {
  res.status(500).json({
    info: "Error has occurred  within the auth router",
    message: error.message,
    stack: error.stack,
  });
}

async function validateUser(req, res, next) {
  const body = req.body;
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  if (Object.keys(body).length !== 0) {
    if (!first_name) {
      res
        .status(400)
        .json({ message: "*Missing*: first name field is required" });
    }
    if (!last_name) {
      res
        .status(400)
        .json({ message: "*Missing*: last name field is required" });
    }
    next();
  } else {
    res.status(400).json({ message: "*Missing*: User Body" });
  }
}

async function validateUserId(req, res, next) {
  try {
    const user = await Users.getById(req.params.id);
    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(404)
        .json({ message: `user with id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Bad Request` });
  }
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department,
  };
  const options = {
    expiresIn: 2000,
  };

  return jwt.sign(payload, jwtSecret, options);
}

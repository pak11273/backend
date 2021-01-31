module.exports = {
  errorHandler,
  validateUser,
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
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  if (Object.keys(body).length !== 0) {
    if (first_name) {
      next();
    } else {
      res
        .status(400)
        .json({ message: "*Missing*: first name field is required" });
    }
    if (last_name) {
      next();
    } else {
      res
        .status(400)
        .json({ message: "*Missing*: last name field is required" });
    }
    if (username) {
      next();
    } else {
      res
        .status(400)
        .json({ message: "*Missing*: username field is required" });
    }
    if (password) {
      next();
    } else {
      res
        .status(400)
        .json({ message: "*Missing*: password field is required" });
    }
    if (email) {
      next();
    } else {
      res.status(400).json({ message: "*Missing*: email field is required" });
    }
  } else {
    res.status(400).json({ message: "*Missing*: User Body" });
  }
}

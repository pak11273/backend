const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-services.js");
const {
  validateUser,
  errorHandler,
  validateUserId,
  generateToken,
} = require("./auth-services.js");
// const { isValid } = require("../users/users-services.js");

// [POST] = Registers a new user in the database
router.post("/register", validateUser, async (req, res, next) => {
  const credentials = req.body;

  try {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    const hash = bcrypt.hashSync(credentials.password, rounds);
    credentials.password = hash;
    const newUser = await Users.add(credentials);
    res.status(201).json({ message: "Success!", newUser });
  } catch (error) {
    next(error);
  }
});

// [POST] = Login an existing user in the database
router.post("/login", validateUser, async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const allegedUser = await Users.findBy({ username });
    if (isValid(req.body)) {
      if (
        allegedUser.username &&
        bcrypt.compareSync(password, allegedUser.password)
      ) {
        const token = generateToken(allegedUser);
        res.status(200).json({ message: "Welcome to our App!", token });
      } else {
        res
          .status(401)
          .json({ message: "Invalid Credentials, Please try again" });
      }
    } else {
      res.status(400).json({ message: "Please provide username and password" });
    }
  } catch (error) {
    next(error);
  }
});

// router.use(errorHandler);

module.exports = router;

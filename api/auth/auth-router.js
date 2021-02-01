const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");
const { validateUser, errorHandler } = require("./auth-services.js");
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
    res.status(500).json(error);
  }
});

// [POST] = Login an existing user in the database
router.post("/login", (req, res, next) => {});

// router.use(errorHandler);

module.exports = router;

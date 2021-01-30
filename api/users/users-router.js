const router = require("express").Router();
const Users = require("./users-model.js");

// [GET] - All registered users in the database
router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

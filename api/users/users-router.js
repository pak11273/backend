const router = require("express").Router();

const { validateUserId } = require("./users-services.js");
const Users = require("./users-model.js");

// [GET] - All registered users in the users table
router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

// [GET] - specified user in the users table
router.get("/:id", async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

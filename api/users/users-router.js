const router = require("express").Router();

const Users = require("./users-model.js");

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/:id/userItems", async (req, res, next) => {
  try {
    const userItems = await Users.getUserItemsList(req.params.id);
    res.status(200).json(userItems);
  } catch (error) {
    next(error);
  }
});

router.post("/addItems", async (req, res, next) => {
  try {
    const addUserItem = await Users.addItem(req.body);
    res.status(201).json({ message: "Success!", addUserItem });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/userItems/:id", async (req, res, next) => {
  try {
    const deletedItem = await Users.removeItem(req.params.id);
    res.status(200).json({
      message: `the item with the id of ${req.params.id} has been deleted from the database `,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

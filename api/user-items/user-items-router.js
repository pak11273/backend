const router = require("express").Router();
const Users = require("./user-items-model.js");

router.get("/:id/list", async (req, res, next) => {
  try {
    const userItems = await Users.getUserItemsList(req.params.id);
    res.status(200).json(userItems);
  } catch (error) {
    next(error);
  }
});

router.post("/addItem", async (req, res, next) => {
  try {
    const addUserItem = await Users.addItem(req.body);
    res.status(201).json({ message: "Success!", addUserItem });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/list/:id", async (req, res, next) => {
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

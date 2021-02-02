const router = require("express").Router();
const { validateItem, validateItemId } = require("./items-services.js");
const Items = require("../items/items-model.js");

router.get("/", async (req, res, next) => {
  try {
    const items = await Items.find();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const item = await Items.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateItem, async (req, res, next) => {
  try {
    const newItem = await Items.add(req.body);
    res.status(201).json({ message: "Success!", newItem });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", validateItem, validateItemId, async (req, res, next) => {
  try {
    const updatedItemData = await Items.update(req.params.id, req.body);
    res.status(200).json(updatedItemData);
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", validateItemId, async (req, res, next) => {
  try {
    const deletedItem = await Items.remove(req.params.id);
    res.status(200).json({
      message: `the item with the id of ${req.params.id} has been deleted from the database `,
    });
  } catch (error) {
    next(error);
  }
});
// comment for push
module.exports = router;

const router = require("express").Router();

const Categories = require("./categories-model.js");

router.get("/", async (req, res, next) => {
  try {
    const categories = await Categories.find();
    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const category = await Categories.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

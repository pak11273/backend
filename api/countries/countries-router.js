const router = require("express").Router();
const Countries = require("./countries-model.js");

router.get("/", async (req, res, next) => {
  try {
    const countries = await Countries.find();
    res.status(200).json(countries);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const country = await Countries.findById(req.params.id);
    res.status(200).json(country);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

const router = require("express").Router();
const Countries = require("./countries-model.js");

const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, async (req, res, next) => {
  try {
    const countries = await Countries.find();
    res.status(200).json(countries);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

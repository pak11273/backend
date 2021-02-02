const Items = require("./items-model.js");

module.exports = {
  validateItem,
  validateItemId,
};

async function validateItem(req, res, next) {
  const body = req.body;
  const item_name = req.body.item_name;
  const item_category = req.body.item_category;
  const item_price = req.body.item_price;
  const item_qty = req.body.item_qty;

  if (Object.keys(body).length !== 0) {
    if (!item_name || "") {
      res
        .status(400)
        .json({ message: "*Missing*: item name field is required" });
    }
    if (!item_category) {
      res
        .status(400)
        .json({ message: "*Missing*: item category field is required" });
    }
    if (!item_price) {
      res
        .status(400)
        .json({ message: "*Missing*: item price field is required" });
    }
    if (!item_qty) {
      res
        .status(400)
        .json({ message: "*Missing*: item quantity field is required" });
    }
    next();
  } else {
    res.status(400).json({ message: "*Missing*: requires item body" });
  }
}

async function validateItemId(req, res, next) {
  try {
    const item = await Items.findById(req.params.id);
    if (item) {
      req.item = item;
      next();
    } else {
      res
        .status(404)
        .json({ message: `item with id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Bad Request` });
  }
}

const db = require("../../database/connections.js");

module.exports = {
  add,
  find,
  findById,
  findBy,
  update,
  remove,
};

async function add(item) {
  const [id] = await db("items").insert(item, "id");
  return findById(id);
}

function findBy(filter) {
  return db("items").where(filter).first();
}

function find() {
  return db("items");
}

function findById(id) {
  return db("items")
    .join("categories as c", "i.category_id", "c.id")
    .select(
      "i.item_name",
      "c.category_name",
      "i.item_price",
      "i.item_qty",
      "i.item_qty_measurement"
    )
    .where({ item_id: id });
}

function update(id, itemBody) {
  return db("items")
    .update(itemBody)
    .where("id", id)
    .then(() => {
      return findById(id);
    });
}

async function remove(id) {
  const itemToDelete = await findById(id);
  await db("items").delete().where("id", id);
  return Promise.resolve(itemToDelete);
}

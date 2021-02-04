const db = require("../../database/connections.js");

module.exports = {
  add,
  find,
  findById,
  findBy,
  getUserItemsList,
  addItem,
  removeItem,
};

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function findBy(filter) {
  return db("users").where(filter).first();
}

function find() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}

function getUserItemsList(id) {
  return db("user_items as ui")
    .join("users as u", "ui.user_id", "u.id")
    .join("items as i", "ui.item_id", "i.id")
    .select(
      "u.id as user_id",
      "ui.id",
      "i.id as item_id",
      "i.item_name",
      "i.item_price",
      "i.item_qty",
      "i.item_qty_measurement"
    )
    .where({ user_id: id });
}

async function addItem(item) {
  const [id] = await db("user_items").insert(item, "id");
  return findById(id);
}

async function removeItem(id) {
  const itemToDelete = await findById(id);
  await db("user_items").delete().where("id", id);
  return Promise.resolve(itemToDelete);
}

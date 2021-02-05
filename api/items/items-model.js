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
  return db("items").where({ id }).first();
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

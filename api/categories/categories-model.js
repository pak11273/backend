const db = require("../../database/connections.js");

module.exports = {
  add,
  find,
  findById,
  findBy,
};

async function add(category) {
  const [id] = await db("categories").insert(category, "id");
  return findById(id);
}

function findBy(filter) {
  return db("categories").where(filter).first();
}

function find() {
  return db("categories");
}

function findById(id) {
  return db("categories").where({ id }).first();
}

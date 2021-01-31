const db = require("../../database/connections.js");

module.exports = {
  add,
  find,
  findById,
  findBy,
};

async function add(user) {
  const [id] = await db("countries").insert(user, "country_id");
  return findById(id);
}

function findBy(filter) {
  return db("countries").where(filter).first();
}

function find() {
  return db("countries");
}

function findById(id) {
  return db("countries").where({ id }).first();
}

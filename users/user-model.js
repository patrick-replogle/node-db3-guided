const db = require("../data/db-config.js");

function find() {
  return db("users").select();
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

async function add(data) {
  const [id] = await db("users").insert(data);
  return db("users")
    .where({ id })
    .first();
}

async function update(id, body) {
  await db("users")
    .where({ id })
    .update(body);

  return findById(id);
}

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

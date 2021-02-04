exports.seed = function (knex) {
  return knex("user_items").insert([
    { user_id: 2, item_id: 1 },
    { user_id: 2, item_id: 4 },
    { user_id: 2, item_id: 5 },
    { user_id: 1, item_id: 3 },
    { user_id: 1, item_id: 4 },
    { user_id: 1, item_id: 7 },
  ]);
};

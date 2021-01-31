const { table } = require("../connections");

exports.up = function (knex) {
  return knex.schema
    .createTable("countries", (tbl) => {
      tbl.increments("country_id");
      tbl.string("name", 128).notNullable().unique();
      tbl.string("name_abbr", 128).notNullable().unique();
    })
    .createTable("items", (tbl) => {
      tbl.increments("item_id", 128);
      tbl.string("item_name", 128).notNullable().unique();
      tbl.string("item_category").notNullable();
      tbl.string("item_description");
      tbl.decimal("item_price").notNullable();
      tbl.float("item_qty").notNullable();
      tbl.string("item_qty_measurement", 128);
    })
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.varchar("username", 128).notNullable().unique().index();
      tbl.varchar("password", 128).notNullable();
      tbl.varchar("email", 128).notNullable().unique();
      tbl
        .int("country_id")
        .unsigned()
        .notNullable()
        .references("country_id")
        .inTable("countries")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.boolean("user_role").notNullable().defaultTo(false);
    })
    .createTable("user_items", (tbl) => {
      tbl
        .int("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .int("item_id")
        .unsigned()
        .notNullable()
        .references("item_id")
        .inTable("items")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user_items")
    .dropTableIfExists("users")
    .dropTableIfExists("items")
    .dropTableIfExists("countries");
};

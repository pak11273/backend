exports.seed = function (knex) {
  return knex("categories").insert([
    { category_name: "Fruits" },
    { category_name: "Vegetables" },
    { category_name: "Dairy" },
    { category_name: "Poultry" },
    { category_name: "Livestock" },
    { category_name: "Beans" },
    { category_name: "Rice" },
    { category_name: "Other" },
    { category_name: "Roots & Tubers" },
    { category_name: "Seeds & Nuts" },
    { category_name: "Peas" },
    { category_name: "Grains" },
  ]);
};

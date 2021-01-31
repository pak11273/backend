exports.seed = function (knex) {
  return knex("countries").insert([
    { name: "Kenya", name_abbr: "KEN" },
    { name: "Uganda", name_abbr: "UGA" },
    { name: "Tanzania", name_abbr: "TZA" },
    { name: "Rwanda", name_abbr: "RWA" },
  ]);
};

exports.seed = function (knex) {
  return knex("users");
  // .truncate()
  // .then(function () {
  return knex("users").insert([
    {
      first_name: "test123",
      last_name: "test",
      email: "123@gmail.com",
      username: "test",
      password: "$2y$08$xizJoTVhyz0/fhtAWmLBp.uRXMOcoddd.9zvi9VSu8nHv97DetXT6",
      country: "Kenya",
      user_role: false,
    },
    {
      first_name: "test1234",
      last_name: "test1",
      email: "1234@gmail.com",
      username: "test123",
      password: "$2y$08$5uDsuTpg3AIhCdh/6Uqx5OCnJcXFozljUCAwnRctq1wm8TBKCe8Ee",
      country: "USA",
      user_role: false,
    },
  ]);
  // });
};

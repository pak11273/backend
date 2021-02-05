exports.seed = function (knex) {
  // Inserts seed entries
  return knex("users").insert([
    {
      id: 1,
      first_name: "test123",
      last_name: "test",
      email: "123@gmail.com",
      username: "test",
      password: "$2y$08$xizJoTVhyz0/fhtAWmLBp.uRXMOcoddd.9zvi9VSu8nHv97DetXT6",
      country: "Kenya",
      user_role: false,
      // password:test
    },
    {
      id: 2,
      first_name: "test1234",
      last_name: "test1",
      email: "1234@gmail.com",
      username: "test1",
      password: "$2y$08$5uDsuTpg3AIhCdh/6Uqx5OCnJcXFozljUCAwnRctq1wm8TBKCe8Ee",
      country: "USA",
      user_role: false,
      // password 1234
    },
  ]);
};

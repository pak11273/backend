require("dotenv").config();

const pg = require("pg");

const localConnection = `postgresql://${process.env.POST_GRES_USER}:${process.env.POST_GRES_PASS}@localhost/african-marketplace`;

let connection;

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false };
  connection = process.env.DATABASE_URL;
} else {
  connection = localConnection;
}

const sharedConfig = {
  client: "pg",
  connection,
  migrations: { directory: "./database/migrations" },
  seeds: { directory: "./database/seeds" },
};

module.exports = {
  development: { ...sharedConfig },
  production: {
    ...sharedConfig,
    pool: { min: 2, max: 10 },
  },
};

// module.exports = {
//   development: {
//     client: "sqlite3",
//     useNullAsDefault: true,
//     connection: {
//       filename: "./database/african-marketplace.db3",
//     },
//     pool: {
//       afterCreate: (conn, done) => {
//         conn.run("PRAGMA foreign_keys = ON", done);
//       },
//     },
//     migrations: {
//       directory: "./database/migrations",
//     },
//     seeds: {
//       directory: "./database/seeds",
//     },
//   },

//   production: {
//     client: "pg",
//     connection: {
//       filename: "./database/african-marketplace.db3",
//     },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//     migrations: {
//       directory: "./database/migrations",
//     },
//     seeds: {
//       directory: "./database/seeds",
//     },
//   },
// };

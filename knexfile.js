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
// connection = localConnection;
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

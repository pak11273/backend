const pg = require("pg");

const localConnection = "postgresql://localhost/African-Marketplace";

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
  migrations: { directory: "./api/database/migrations" },
  seeds: { directory: "./api/database/seeds" },
};

module.exports = {
  devlopment: { ...sharedConfig },
  production: {
    ...sharedConfig,
    pool: { min: 2, max: 10 },
  },
};

const express = require("express");

const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const countriesRouter = require("./countries/countries-router.js");
const categoriesRouter = require("./categories/categories-router.js");
const itemsRouter = require("./items/items-router.js");
const userItemsRouter = require("./user-items/user-items-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/countries", countriesRouter);
server.use("/api/categories", categoriesRouter);
server.use("/api/items", itemsRouter);
server.use("/api/userItems", userItemsRouter);

server.get("/", (req, res) => {
  res.json({
    apiSuccessMessage:
      "Congratulations, Welcome to the African Marketplace API!",
  });
});

module.exports = server;

const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

// [POST] = Registers a new user in the database
router.post("/register", async (req, res, next) => {});

// [POST] = Login an existing user in the database
router.post("/login", (req, res, next) => {});

module.exports = router;

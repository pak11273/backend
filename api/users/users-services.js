module.exports = {
  isValid,
  validateUserId,
};

function isValid(body) {
  return Boolean(
    body.username && body.password && typeof body.password === "string"
  );
}

async function validateUserId(req, res, next) {
  try {
    const user = await Users.getById(req.params.id);
    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(404)
        .json({ message: `user with id ${req.params.id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: `Bad Request` });
  }
}

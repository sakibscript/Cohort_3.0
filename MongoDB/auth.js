const jwt = require("jsonwebtoken");
const JWT_SECRET = "sakib12345";

function auth(req, res, next) {
  const token = req.headers.token;
  const user = jwt.verify(token, JWT_SECRET);

  if (user) {
    req.userId = user.userId;
    next();
  } else {
    res.status(403).send({
      message: "Incorrect credentials",
    });
  }
}

module.exports = auth;

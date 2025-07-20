const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "sakib12345";
const app = express();

app.use(express.json());

const users = [];

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });
  res.json({
    message: "You have signed up",
  });
});

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

//auth middleware
function auth(req, res, next) {
  try {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;

    if (username) {
      req.username = username;
      next();
    } else {
      res.json({
        message: "You are not logged in",
      });
    }
  } catch (err) {
    res.status(401).send({ message: "Invalid or expired token" });
  }
}

app.get("/me", auth, function (req, res) {
  const user = users.find((user) => user.username === req.username);

  if (user) {
    res.json({
      username: user.username,
    });
  } else {
    res.status(401).send({
      message: "Unauthorized access",
    });
  }
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000);

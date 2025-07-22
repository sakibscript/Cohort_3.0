require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel, TodoModel } = require("./db");
const auth = require("./auth");

const JWT_SECRET = process.env.JWT_SECRET;
mongoose.connect(process.env.MONGODB_URL);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  const hashedPassword = await bcrypt.hash(password, 10);

  await UserModel.create({
    email: email,
    password: hashedPassword,
    name: name,
  });
  res.json({
    message: "You are signed up",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email,
  });

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (user && passwordMatch) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid email or password",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    title: title,
    done: done ?? false,
    userId: req.userId,
  });
  res.json({
    message: "Todo is added",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;
  const todos = await TodoModel.find({
    userId,
  })
    .populate("userId")
    .exec();
  res.json({
    todos,
  });
});

app.listen(process.env.PORT || 3000);

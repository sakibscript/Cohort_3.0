const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel, TodoModel } = require("./db");
const auth = require("./auth");

const JWT_SECRET = "sakib12345";
mongoose.connect(
  "mongodb+srv://sakib:Sakib12345@cluster0.kgorqfq.mongodb.net/todo-app-db"
);

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
    password: password,
  });

  const passwordMatch = bcrypt.compare(password, user.password);

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
    done: done,
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

app.listen(3000);

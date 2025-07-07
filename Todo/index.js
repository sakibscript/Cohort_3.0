const fs = require("fs");
const path = require("path");
const express = require("express");

const todoFile = path.join(__dirname, "todos.json");

const readTodos = () => {
  const data = fs.readFileSync(todoFile, "utf8");
  return JSON.parse(data);
};

const writeTodos = (todos) => {
  fs.writeFileSync(todoFile, JSON.stringify(todos, null, 2));
};

const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  const todos = readTodos();
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const todos = readTodos();
  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    task,
    completed: false,
  };

  todos.push(newTodo);
  writeTodos(todos);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { task, completed } = req.body;

  const todos = readTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }
  if (task !== undefined) {
    todos[index].task = task;
  }
  if (completed !== undefined) {
    todos[index].completed = completed;
  }

  writeTodos(todos);
  res.json(todos[index]);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const todos = readTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  const deleteTodo = todos.splice(index, 1)[0];
  writeTodos(todos);
  if (deleteTodo) {
    res.send(`Todo deleted for id:${id}`);
  } else {
    res.send(`Todo not deleted for id:${id}`);
  }
});

app.listen(3000);

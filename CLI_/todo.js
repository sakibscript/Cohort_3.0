const fs = require("fs");
const path = require("path");
const { Command } = require("commander");

const program = new Command();
const filePath = path.join(__dirname, "todos.json");

// Helper: Load todos
function loadTodos() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

// Helper: Save todos
function saveTodos(todos) {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

// Add a todo
program
  .command("add <task>")
  .description("Add a new todo")
  .action((task) => {
    const todos = loadTodos();
    todos.push({ text: task, done: false });
    saveTodos(todos);
    console.log("Todo added");
  });

// Delete a todo
program
  .command("delete <index>")
  .description("Delete a todo by index")
  .action((index) => {
    const todos = loadTodos();
    const idx = parseInt(index);
    if (idx >= 0 && idx < todos.length) {
      todos.splice(idx, 1);
      saveTodos(todos);
      console.log("Todo deleted");
    } else {
      console.log("Invalid index");
    }
  });

// Mark as done
program
  .command("done <index>")
  .description("Mark a todo as done")
  .action((index) => {
    const todos = loadTodos();
    const idx = parseInt(index);
    if (idx >= 0 && idx < todos.length) {
      todos[idx].done = true;
      saveTodos(todos);
      console.log("Todo marked as done");
    } else {
      console.log("Invalid index");
    }
  });

// List todos
program
  .command("list")
  .description("List all todos")
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log("No todos found");
    } else {
      console.log("\nYour Todos:");
      todos.forEach((todo, i) => {
        console.log(`${i + 1}. ${todo.text}`);
      });
    }
  });

// Parse CLI arguments
program.parse(process.argv);

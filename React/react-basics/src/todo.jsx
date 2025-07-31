import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Hit the gym regularly",
      done: true,
    },
  ]);
  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }
    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: false,
    });
    setTodos(newArray);
  }
  return (
    <div>
      <input id="title" type="text" placeholder="Title" />
      <input id="description" type="text" placeholder="description" />
      <button onClick={addTodo}>Add todo</button>
      <br />
      {todos.map((todo) => (
        <DisplayTodos
          title={todo.title}
          description={todo.description}
          done={todo.done}
        />
      ))}
    </div>
  );
}
function DisplayTodos(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h6>{props.description}</h6>
      <p>{props.done ? "Task is done" : "Task is not done"}</p>
    </div>
  );
}

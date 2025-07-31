import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Todo from "./todo.jsx";
import Counter from "./counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Counter /> */}
    <Todo />
  </StrictMode>
);

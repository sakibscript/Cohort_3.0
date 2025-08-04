import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import TodoApp from "./TodoApp.jsx";
import CounterApp from "./CounterApp.jsx";
import CounterApp2 from "./CounterApp2.jsx";
import CounterApp3 from "./CounterApp3.jsx";
import App from "./PostTabApp.jsx";
import PostApp from "./PostApp.jsx";
import ToggleMessageApp from "./toggleMessage.jsx";
import NotificationApp from "./NotificationApp.jsx";
import PostTabApp from "./PostTabApp.jsx";


createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <CounterApp />
  // <CounterApp2 />
  // <CounterApp3 />
  // <TodoApp />
  // <App />
  <PostApp />
  // <ToggleMessageApp />
  // <NotificationApp/>
  // <PostTabApp />
  // </StrictMode>
);

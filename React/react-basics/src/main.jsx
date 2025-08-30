import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import TodoApp from "./TodoApp.jsx";
import CounterApp from "./CounterApp.jsx";
import CounterApp2 from "./CounterApp2.jsx";
import CounterApp3 from "./CounterApp3.jsx";
import PostApp from "./PostApp.jsx";
import ToggleMessageApp from "./toggleMessage.jsx";
import NotificationApp from "./NotificationApp.jsx";
import PostTabApp from "./PostTabApp.jsx";
import CardApp from "./CardApp.jsx";
import ModalApp from "./ModalApp.jsx";
import CollapsibleApp from "./CollapsibleApp.jsx";
import SPA_Router_ExampleApp from "./SPA-Router-ExampleApp.jsx";
import UseRefExampleApp from "./useRefExampleApp.jsx";
import TimeApp from "./TimeApp.jsx";
import ScrollMessageApp from "./scrollMessageApp.jsx";
import BulbApp from "./BulbApp.jsx";
import CountStateApp from "./CountStateApp.jsx";
import UseCounterApp from "./useCounterApp.jsx";
import UseFetchApp from "./useFetchApp.jsx";
import UsePrevApp from "./usePrevApp.jsx";
import UseDebounceApp from "./useDebounceApp.jsx";
import CounterContextApi from "./recoil/CounterContextApi.jsx";
import CounterRecoilApp from "./recoil/CounterRecoilApp.jsx";
import SelectorApp from "./recoil/SelectorApp.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // <CounterApp />
  // <CounterApp2 />
  // <CounterApp3 />
  // <TodoApp />
  // <App />
  // <PostApp />
  // <ToggleMessageApp />
  // <NotificationApp/>
  // <PostTabApp />
  // <CardApp />
  // <ModalApp />
  // <CollapsibleApp />
  // <SPA_Router_ExampleApp />
  // <UseRefExampleApp />
  // <TimeApp />
  // <ScrollMessageApp />
  // <BulbApp />
  // <CountStateApp />
  // <UseCounterApp />
  // <UseFetchApp />
  // <UsePrevApp />
  // <UseDebounceApp />
  // <CounterContextApi />
  // <CounterRecoilApp />
  <SelectorApp />
  // </StrictMode>
);

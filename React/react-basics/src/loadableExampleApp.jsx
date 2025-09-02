// import axios from "axios";
// import {
//   atomFamily,
//   RecoilRoot,
//   selectorFamily,
//   useRecoilValue,
//   useRecoilValueLoadable,
// } from "recoil";

// const todosAtomFamily = atomFamily({
//   key: "todosAtomFamily",
//   default: selectorFamily({
//     key: "todosSelectorFamily",
//     get:
//       (id) =>
//       async ({ get }) => {
//         const res = await axios.get(
//           `https://jsonplaceholder.typicode.com/todos/${id}`
//         );
//         return res.data;
//       },
//   }),
// });

// export default function LoadableExampleApp() {
//   return (
//     <RecoilRoot>
//       <Todo id={1} />
//       <Todo id={2} />
//     </RecoilRoot>
//   );
// }

// function Todo({ id }) {
//   const currentTodo = useRecoilValueLoadable(todosAtomFamily(id));
//   if (currentTodo.state === "loading") {
//     return <div>Loading...</div>;
//   } else if (currentTodo.state === "hasValue") {
//     return (
//       <div>
//         {currentTodo.contents.title} -{" "}
//         {currentTodo.contents.completed ? "Done" : "Pending"}
//       </div>
//     );
//   } else if (currentTodo.state === "hasError") {
//     return <div>Error loading todos.</div>;
//   }
// }

import React, { useState, memo } from "react";

const Child = memo(({ value }) => {
  console.log("Child rendered!");
  return <h2>Child Value: {value}</h2>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Child value="Fixed Value" />
    </div>
  );
}

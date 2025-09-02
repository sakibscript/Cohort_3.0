import axios from "axios";
import { atomFamily, RecoilRoot, selectorFamily, useRecoilValue } from "recoil";

const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: selectorFamily({
    key: "todosSelectorFamily",
    get:
      (id) =>
      async ({ get }) => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        return res.data;
      },
  }),
});

export default function SelectorFamilyApp() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={4} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
      {currentTodo.title} - {currentTodo.completed ? "Done" : "Pending"}
    </div>
  );
}

import { atomFamily, RecoilRoot, useRecoilValue } from "recoil";

const TODOS = [
  {
    id: 1,
    title: "Learn Recoil",
    description: "Understand the basics of Recoil.js",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Build a Recoil App",
    description: "Create a simple app using Recoil for state management",
    isCompleted: true,
  },
];

const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    return TODOS.find((todo) => todo.id === id);
  },
});

export default function AtomFamilyApp() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <div>
      {currentTodo.title} - {currentTodo.description} -{" "}
      {currentTodo.isCompleted ? "Done" : "Pending"}
    </div>
  );
}

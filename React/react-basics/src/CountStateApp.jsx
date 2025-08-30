import { useState } from "react";

export default function CountStateApp() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Value count={count} />
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </>
  );
}

function Value({ count }) {
  return <h5>Count: {count}</h5>;
}

function Increase({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Decrease({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

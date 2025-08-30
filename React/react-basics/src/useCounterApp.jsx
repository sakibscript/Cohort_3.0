import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
  return {
    count: count,
    increaseCount: increaseCount,
  };
}

export default function UseCounterApp() {
  const { count, increaseCount } = useCounter();
  return (
    <div>
      <h5>{count}</h5>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
}

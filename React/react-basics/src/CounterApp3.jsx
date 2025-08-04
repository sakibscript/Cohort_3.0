///cleanup and dependency array example
import { useState, useEffect } from "react";

export default function CounterApp3() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    setCount2((count) => count - 1);
  };

  return (
    <div>
      <Counter count={count} count2={count2} />
      <button onClick={increase}>Increase Count</button>
      <button onClick={decrease}>Decrease Count</button>
    </div>
  );
}
function Counter(props) {
  useEffect(() => {
    console.log("on mount"); /// This effect runs only once when the component is mounted
    return () => {
      console.log("on unmount"); /// This cleanup function runs when the component is unmounted
    };
  }, []);

  useEffect(() => {
    console.log("count has changed"); /// This effect runs when props.count changes

    return () => {
      console.log("cleanup inside second useEffect"); /// This cleanup function runs before the next effect runs or when the component is unmounted
    };
  }, [props.count]); //dependency array with props.count means this effect will run when props.count changes. Not applicable for props.count2

  return (
    <div>
      Counter1 {props.count}
      <br />
      Counter2 {props.count2}
    </div>
  );
}

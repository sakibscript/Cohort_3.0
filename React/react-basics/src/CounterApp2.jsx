///useEeffect example
import { useEffect, useState } from "react";

export default function CounterApp2() {
  ///Conditional rendering
  let [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterVisible((prev) => !prev);
    }, 5000);
  }, []);
  return (
    <div>
      hi
      {counterVisible && <Counter />}
      hello
    </div>
  );
}
///When state variable is re-rendered or setState variable is called there is lot of interval function is runs in every re-render. Solution is to use useEffect hook
const Counter = () => {
  const [count, setCount] = useState(0);

  // console.log("counter"); ///called in every re-render

  ///hooking into the lifecycle(mounting, re-rendering, unmounting) events of react
  useEffect(() => {
    console.log("on mount"); ///called when the component is mounted only once
    let clock = setInterval(() => {
      console.log("interval called"); ///Clock is running background while the component is unmounted. so, we need to clear the interval when the component is unmounted
      setCount((count) => count + 1); ///get the current value and increase the value of it
    }, 1000);

    ///cleanup function is called when the component is unmounted
    return () => {
      console.log("on unmount");
      clearInterval(clock); ///clear the interval when the component is unmounted
    };
  }, []);

  return (
    <div>
      <h1 id="count">{count}</h1>
      {/* <button onClick={increaseCount}>Increase Count</button> */}
    </div>
  );
};

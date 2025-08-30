import { useEffect, useRef, useState } from "react";

function usePrev(value) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value; ///Initially undefined, then gets updated to previous value
  }, [value]);

  return ref.current; ///Initially undefined
} ///it returns first, effect gets called later

export default function UsePrevApp() {
  const [count, setCount] = useState(0);
  const prev = usePrev(count);
  return (
    <div>
      <h5>Current: {count}</h5>
      <h5>Previous: {prev}</h5>

      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

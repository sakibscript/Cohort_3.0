import { useRef } from "react";

function useDebounce(originalFn, delay) {
  const currentClock = useRef();

  const debounceFunction = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, delay);
  };
  return debounceFunction;
}

export default function UseDebounceApp() {
  function sendDataToBackend() {
    fetch("api.amazon.com/search/");
  }
  const debounceFunction = useDebounce(sendDataToBackend, 200);

  return (
    <div>
      <input type="text" onChange={debounceFunction} />
    </div>
  );
}

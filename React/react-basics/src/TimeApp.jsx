import { useRef, useState } from "react";

export default function TimeApp() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const statTimer = () => {
    if (timerRef.current !== null) return; // Already running, do nothing

    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h4>{time}</h4>
      <button onClick={statTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

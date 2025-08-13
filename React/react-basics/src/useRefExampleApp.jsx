import { useRef } from "react";
export default function UseRefExampleApp() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Name" />
      <input type="text" placeholder="Password" />
      <button onClick={handleFocus}>Click</button>
    </div>
  );
}

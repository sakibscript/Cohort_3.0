///Conditional rendered example
import { useState } from "react";
export default function ToggleMessageApp() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>This is conditionally rendered!</p>}
    </div>
  );
};

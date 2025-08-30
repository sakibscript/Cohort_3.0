///Context API Example
import React, { useContext, useState } from "react";
const BulbContext = React.createContext();

function ContextProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
        {children}
      </BulbContext.Provider>
    </div>
  );
}

export default function BulbApp() {
  return (
    <div>
      <ContextProvider>
        <LightBulb />
      </ContextProvider>
    </div>
  );
}

function LightBulb() {
  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function ToggleBulbState() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  function toggle() {
    setBulbOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

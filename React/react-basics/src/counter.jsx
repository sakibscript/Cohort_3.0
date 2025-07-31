import { createElement, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
    </div>
  );
}
function Button(props) {
  function onButtonClick() {
    props.setCount(props.count + 1);
  }

  return createElement(
    "button",
    { onClick: onButtonClick },
    `Counter ${props.count}`
  );

  // return <button onClick={onButtonClick}>Counter {props.count}</button>;
}

import { atom, RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";

const counterAtom = atom({
  key: "counter",
  default: 0,
});

export default function CounterRecoilApp() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);

  return <div>Count: {count}</div>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}

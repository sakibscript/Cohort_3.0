import {
  atom,
  RecoilRoot,
  useSetRecoilState,
  useRecoilValue,
  selector,
} from "recoil";

const counterAtom = atom({
  key: "counter",
  default: 0,
});

const evenSelector = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    const CurrentCount = get(counterAtom);
    if (CurrentCount % 2 == 0) {
      return true;
    } else {
      return false;
    }
  },
});

export default function SelectorApp() {
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
      <IsEven />
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
      <button onClick={() => setCount((c) => c + 2)}>Increase</button>
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

function IsEven() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "Even" : "Odd"}</div>;
}

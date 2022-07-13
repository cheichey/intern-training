import React from 'react';
import {Counter} from "./Counter";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {counterState} from "../recoil/atoms/CounterAtom";

const useLogic = (): [number, () => void, () => void] => {
  const count = useRecoilValue(counterState)
  const setCount = useSetRecoilState(counterState);
  const addCount = () => {
    setCount(count + 1);
  }
  const subCount = () => {
    setCount(count - 1);
  }

  return [count, addCount, subCount]
}
function App() {
  const [count, add, sub] = useLogic()
  return <div>
    <Counter
      count={count}
      onClickAddButton={add}
      onClickSubButton={sub}
    />
  </div>;
}

export default App;

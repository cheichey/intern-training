import React, {useState} from 'react';
import logo from '../logo.svg';
import './App.css';
import {Counter} from "./Counter";

const useLogic = (): [number, () => void, () => void] => {
  const [count, setCount] = useState<number>(0);
  const addCount = () => {
    setCount(count + 1);
  }
  const subCount = () => {
    setCount(count - 1);
  }

  return [count, addCount, subCount]
}
function App() {
  const [count, addCount, subCount] = useLogic();
  return <div>
    <Counter
      count={count}
      onClickAddButton={addCount}
      onClickSubButton={subCount}
    />
  </div>;
}

export default App;

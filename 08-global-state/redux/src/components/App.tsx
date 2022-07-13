import React from 'react';
import {Counter} from "./Counter";
import {useSelector} from "../store";
import {useDispatch} from "react-redux";


function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return <div>
    <Counter
      count={count}
      onClickAddButton={dispatch}
      onClickSubButton={dispatch}
    />
  </div>;
}

export default App;

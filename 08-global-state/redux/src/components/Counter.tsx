import {FC} from "react";
import {Dispatch} from "redux";
import {add, sub} from "../counterSlice";

export type CounterProps = {
  count: number;
  onClickAddButton: Dispatch;
  onClickSubButton: Dispatch;
}
export const Counter: FC<CounterProps> = (props) => {
  const {count, onClickAddButton, onClickSubButton} = props;
  return <div>
    <h2>Count: {count}</h2>
    <button
      onClick={() => onClickAddButton(add())}
      type="button"
    >Add</button>
    <button
    onClick={() => onClickSubButton(sub())}
    type="button"
    >
      Sub
    </button>
  </div>
}
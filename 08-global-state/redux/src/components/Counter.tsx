import {FC} from "react";

export type CounterProps = {
  count: number;
  onClickAddButton: () => unknown;
  onClickSubButton: () => unknown;
}
export const Counter: FC<CounterProps> = (props) => {
  const {count, onClickAddButton, onClickSubButton} = props;
  return <div>
    <h2>Count: {count}</h2>
    <button
      onClick={() => onClickAddButton()}
      type="button"
    >Add</button>
    <button
    onClick={() => onClickSubButton()}
    type="button"
    >
      Sub
    </button>
  </div>
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  byAmount,
  decrement,
  increment,
  reset,
} from "../redux/counter/CounterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(byAmount(5))}>By Amount</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default CounterView;

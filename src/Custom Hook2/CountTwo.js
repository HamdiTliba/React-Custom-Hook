import React from "react";
import useCount from "./useCount";

export const CountTwo = () => {
  const [count, increment, decrement, reset] = useCount(2, 2);

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CountTwo;

import { useState } from "react";

function useCount(initialstate, value) {
  const [count, setCount] = useState(initialstate);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCount(initialstate);
  };
  return [count, increment, decrement, reset];
}

export default useCount;

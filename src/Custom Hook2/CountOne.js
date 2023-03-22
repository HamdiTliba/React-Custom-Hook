import useCount from "./useCount";

const CountOne = () => {
  const [count, increment, decrement, reset] = useCount(0, 1);

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountOne;

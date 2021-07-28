import React, { useState } from 'react';
import useCounter from '../Hooks/useCounter';

const CounterOne = () => {
  const [count, incrementHandler, decrementHandler, resetHandler] = useCounter(
    0,
    1
  );

  return (
    <div>
      <h2>CounterOne : {count}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default CounterOne;

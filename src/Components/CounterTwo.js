import React, { useState } from 'react';
import useCounter from '../Hooks/useCounter';

const CounterTwo = () => {
  const [count, incrementHandler, decrementHandler, resetHandler] = useCounter(
    18,
    10
  );

  return (
    <div>
      <h2>CounterTwo : {count}</h2>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default CounterTwo;

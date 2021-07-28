import { useState } from 'react';

const useCounter = (initialCount = 0, value = 1) => {
  const [count, setCount] = useState(initialCount);

  const incrementHandler = () => {
    setCount(prevCount => prevCount + value);
  };
  const decrementHandler = () => {
    setCount(prevCount => prevCount - value);
  };
  const resetHandler = () => {
    setCount(initialCount);
  };

  return [count, incrementHandler, decrementHandler, resetHandler];
};

export default useCounter;

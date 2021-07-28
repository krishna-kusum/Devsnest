import React, { useState } from 'react';
import useDocumentTitle from '../Hooks/useDocumentTitle';

const DocTitleTwo = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <h1> Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count </button>
    </div>
  );
};

export default DocTitleTwo;

import React, { useState, useMemo, useCallback } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  // Memoize the squared value of count
  const squaredValue = useMemo(() => {
    return count ** 2;
  }, [count]);

  // Memoize the increment function using useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <p>Count squared: {squaredValue}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterApp;
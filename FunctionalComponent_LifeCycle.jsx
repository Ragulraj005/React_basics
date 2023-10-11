import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // componentDidMount - equivalent
  useEffect(() => {
    console.log("Component is mounted to the DOM.");
    return () => {
      console.log("Component is unmounted from the DOM.");
    };
  }, []);

  // componentDidUpdate - equivalent
  useEffect(() => {
    console.log("Component has been updated. Count: " + count);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;

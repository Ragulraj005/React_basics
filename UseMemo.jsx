import React, { useState, useMemo } from 'react';

function FibonacciCalculator({ n }) {
  const calculateFibonacci = (n) => {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  };

  const fibonacciNumber = useMemo(() => {
    return calculateFibonacci(n);
  }, [n]);

  return (
    <div>
      <p>The {n}th Fibonacci number is: {fibonacciNumber}</p>
    </div>
  );
}

function App() {
  const [n, setN] = useState(10);

  return (
    <div>
      <h2>Fibonacci Number Calculator</h2>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />
      <FibonacciCalculator n={n} />
    </div>
  );
}

export default App;

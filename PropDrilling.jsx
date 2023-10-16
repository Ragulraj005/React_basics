import "./styles.css";

import React from "react";

// Grandchild component
function Grandchild({ data }) {
  return <div>Grandchild: {data}</div>;
}

// Child component
function Child({ data }) {
  return (
    <div>
      Child: {data}
      <Grandchild data={data} />
    </div>
  );
}

// Parent component
function Parent() {
  const data = "Hello from Parent";
  return (
    <div>
      Parent: {data}
      <Child data={data} />
    </div>
  );
}

// App component
function App() {
  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Parent />
    </div>
  );
}

export default App;

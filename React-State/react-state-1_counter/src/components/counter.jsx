import { useState } from "react";

// let count = 0;

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleDecrease}>
          -
        </button>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
}

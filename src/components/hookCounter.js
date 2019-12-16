import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const incrCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={incrCount}>Count {count}</button>
    </div>
  );
}

export default HookCounter;

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Likes: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Like ❤️
      </button>
    </div>
  );
}

export default Counter;
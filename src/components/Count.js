import { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);

  function subCount() {
    setCount((a) => a - 1);
  }
  function addCount() {
    setCount((a) => a + 1);
  }

  return (
    <div>
      <button
        className="p-5 bg-gray-200 mt-4 text-4xl ml-8 border border-gray-50"
        onClick={subCount}
      >
        -
      </button>
      <span className="m-2 text-3xl font-normal">{count}</span>
      <button className="p-5 bg-gray-200 mt-4 text-4xl" onClick={addCount}>
        +
      </button>
    </div>
  );
}
export default Count;

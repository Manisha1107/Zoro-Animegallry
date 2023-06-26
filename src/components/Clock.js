import { useState } from "react";
function Clock() {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  function RefreshTime() {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-64 ">
        <h1>{ctime}</h1>
        <button
          className="bg-purple-400 pl-4 pr-4 pt-4 pb-4 rounded-sm text-white"
          onClick={RefreshTime}
        >
          Get Time
        </button>
      </div>
    </div>
  );
}
export default Clock;

import { useState } from "react";

function Dclock() {
  let newValue = new Date().toLocaleTimeString();
  const [curr, setCurr] = useState(newValue);

  function change() {
    newValue = new Date().toLocaleTimeString();
    setCurr(newValue);
  }
  setInterval(change, 1000);

  return (
    <div className="flex flex-row justify-center ">
      <h1 className="mt-64">{curr}</h1>
    </div>
  );
}
export default Dclock;

import Card from "./Card";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { cardsData } from "./Cards.js";
import { sideData } from "./Data";
import Week from "./Week";

import Month from "./Month";
import { useState } from "react";

function Home() {
  const [state, setState] = useState("Today");
  console.log(state);

  function handleToday() {
    setState("Today");
  }
  function handleWeek() {
    setState("Week");
  }
  function handleMonth() {
    setState("Month");
  }

  const stylecolor = "bg-gray-600";

  // if (state === "Month") {
  //   console.log("monthly data", state);
  // } else if (state === "Week") {
  //   console.log("weekly data", state);
  // } else {
  //   console.log("Daily Data");
  // }

  // setState((a) => a + 1);
  // console.log("after setState", state);

  function Data(value) {
    return (
      <Sidebar
        number={value.number}
        image={value.image}
        content={value.content}
      />
    );
  }
  function Cards(items) {
    return (
      <Card
        key={items.id}
        imageURL={items.imageURL}
        title={items.title}
        tname={items.tname}
        duration={items.duration}
      />
    );
  }
  return (
    <div className="bg-stone-800 w-full h-full sm:bg-blue md:bg-red lg-yellow ">
      <Navbar />

      <div className="bg-stone-900 ">
        <h1 className="text-2xl ml-10 text-lime-300">Most Popular</h1>
        <div className="flex flex-row justify-around ">
          <div>
            <div className=" grid grid-cols-4 ">{cardsData.map(Cards)}</div>
          </div>

          <div className="w-1/5 bg-stone-700 mt-10">
            <div className="flex flex-row justify-between">
              <div
                className={`${
                  state === "Today" ? stylecolor : null
                } text-white w-full p-2 hover:cursor-pointer`}
                onClick={handleToday}
              >
                today
              </div>

              <div
                className={`text-white ${
                  state === "Week" ? stylecolor : null
                } w-full p-2  hover:cursor-pointer`}
                onClick={handleWeek}
              >
                week
              </div>

              <div
                className={`text-white ${
                  state === "Month" ? stylecolor : null
                } w-fill p-2 hover:cursor-pointer`}
                onClick={handleMonth}
              >
                month
              </div>
            </div>
            {/* <Sidebar
              number="01"
              image="https://www.filmspourenfants.net/wp-content/uploads/2018/07/one-piece-serie-a.jpg"
              content="one piece"
            /> */}
            {state === "Month" ? (
              <Month />
            ) : state === "Week" ? (
              <Week />
            ) : (
              <div> {sideData.map(Data)} </div>
            )}
            {/* <div> {sideData.map(Data)}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

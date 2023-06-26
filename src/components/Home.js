import Card from "./Card";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { cardsData } from "./Cards.js";
import { sideData } from "./Data";
import Week from "./Week";
import Today from "./Today";
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
        key={value.number}
        number={value.number}
        image={value.image}
        content={value.content}
        // category={value.category}
      />
    );
  }
  function Cards(items) {
    return (
      <Card
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
        <h1 className="text-2xl ml-10 text-lime-300 hidden sm:block md:block xl:block ">
          Most Popular
        </h1>
        <div className="flex flex-row justify-around ">
          <div>
            <div className=" grid grid-cols-2 sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  ">
              {cardsData.map(Cards)}
            </div>
          </div>

          <div className="w-1/5 bg-stone-700 mt-10 hidden md:block lg:block">
            <div className="flex flex-row justify-between">
              <div
                className={`${
                  state === "Today" ? stylecolor : null
                } text-white w-full p-2 hover:cursor-pointer hover:bg-lime-700`}
                onClick={handleToday}
              >
                Today
              </div>

              <div
                className={`text-white ${
                  state === "Week" ? stylecolor : null
                } w-full p-2  hover:cursor-pointer hover:bg-lime-700`}
                onClick={handleWeek}
              >
                Week
              </div>

              <div
                className={`text-white ${
                  state === "Month" ? stylecolor : null
                } w-fill p-2 hover:cursor-pointer hover:bg-lime-700`}
                onClick={handleMonth}
              >
                Month
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
              <Today />
            )}
            {/* <div> {sideData.map(Data)}</div> */}
          </div>
        </div>
      </div>

      <div className="w-4/5 bg-stone-700 m-5 ml-8 md:hidden lg:hidden sm:hidden xl:hidden">
        <div className="flex flex-row justify-between">
          <div
            className={`${
              state === "Today" ? stylecolor : null
            } text-white w-full p-2 hover:cursor-pointer`}
            onClick={handleToday}
          >
            Today
          </div>

          <div
            className={`text-white ${
              state === "Week" ? stylecolor : null
            } w-full p-2  hover:cursor-pointer`}
            onClick={handleWeek}
          >
            Week
          </div>

          <div
            className={`text-white ${
              state === "Month" ? stylecolor : null
            } w-fill p-2 hover:cursor-pointer`}
            onClick={handleMonth}
          >
            Month
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
      <div className="mb-4 sm:hidden lg:hidden xl:hidden md:hidden">
        <h2 className="text-lime-400 text-xl mb-1 ml-2">Genres</h2>
        <div className="grid grid-cols-4 gap-3 ">
          <div className="bg-stone-700 m-1 rounded-sm text-red-400">Action</div>
          <div className="bg-stone-700 m-1 w-20 rounded-sm text-amber-500">
            Adventure
          </div>
          <div className="bg-stone-700 m-1 ml-2 rounded-sm text-lime-300">
            cars
          </div>
          <div className="bg-stone-700 m-1 rounded-sm text-violet-400">
            Comedy
          </div>
          <div className="bg-stone-700 m-1 rounded-sm text-green-500">
            Suspense
          </div>
          <div className="bg-stone-700 m-1 rounded-sm ">Thriller</div>
          <div className="bg-stone-700  m-1 rounded-sm text-yellow-800">
            Parody
          </div>
          <div className="bg-stone-700 m-1 rounded-sm w-10">Police</div>
          <div className="bg-stone-700 m-1 rounded-sm text-emerald-50">
            Historical
          </div>
          <div className="bg-stone-700 m-1 rounded-sm">Kids</div>
          <div className="bg-stone-700  m-1 rounded-sm">Parody</div>
          <div className="bg-stone-700 m-1 rounded-sm text-red-400">Harem</div>
          <div className="bg-stone-700 m-1 rounded-sm text-yellow-300">
            Horror
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

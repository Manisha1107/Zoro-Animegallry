import { sideData } from "./Data";
import Sidebar from "./Sidebar";

const dData = (item, index) => {
  return (
    <Sidebar
      key={item.number}
      number={item.number}
      image={item.image}
      content={item.content}
    />
  );
};

function Today() {
  const dailyData = sideData.filter((item) => {
    if (item.category == "Today") {
      console.log("clicked");
      return item;
    }
  });
  console.log("dailyData", dailyData);
  return <div>{dailyData.map(dData)}</div>;
}
export default Today;

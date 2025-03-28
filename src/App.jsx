import Costs from "./Components/Costs/Costs";
import "./Components/New_Cost/NewCost";
import NewCost from "./Components/New_Cost/NewCost";

import "./index.scss";

function App() {
  const coststInfo = [
    {
      date: new Date(2022, 10, 12),
      item: "Apple",
      sum: 2,
      id: "q1",
    },
    {
      date: new Date(2024, 10, 12),
      item: "Pear",
      sum: 4,
      id: "q2",
    },
    {
      date: new Date(2023, 11, 11),
      item: "Orange",
      sum: 6,
      id: "q3",
    },
  ];

  //to get input data from child to parent by chaining
  function addInputInfoData(cost) {
    console.log("app", cost);
  }

  return (
    <>
      <NewCost onAddCost={addInputInfoData} />
      <Costs costsValue={coststInfo} />
    </>
  );
}

export default App;

import { useState } from "react";
import Costs from "./Components/Costs/Costs";
import "./Components/New_Cost/NewCost";
import NewCost from "./Components/New_Cost/NewCost";

import "./index.scss";

const INITIAL_COSTS = [
  {
    date: new Date(2022, 10, 2),
    item: "Apple",
    sum: 2,
    id: "a0",
  },
  {
    date: new Date(2024, 10, 19),
    item: "Pear",
    sum: 4,
    id: "b1",
  },
  {
    date: new Date(2023, 11, 1),
    item: "Orange",
    sum: 3,
    id: "c2",
  },
  {
    date: new Date(2025, 12, 3),
    item: "Banana",
    sum: 1,
    id: "d3",
  },
];

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  
  //to get input data from child to parent by chaining
  function addInputInfoData(cost) {
    // setCosts([cost, ...costs]) But this isn't correct state updating!!!
    setCosts(prevCosts => { //PrevCosts includes actual state
      return [cost, ...prevCosts]
    })
  }

  return (
    <>
      <NewCost onAddCost={addInputInfoData} />
      <Costs costsValue={costs} />
    </>
  );
}

export default App;

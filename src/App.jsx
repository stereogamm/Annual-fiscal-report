import { useState, useRef } from "react";
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/New_Cost/NewCost";
import Header from "./Components/UI/Header";

import "./index.scss";

const INITIAL_COSTS = [
  {
    date: new Date(2023, 8, 6),
    item: "🌓 Luminis",
    sum: 11,
    id: "a0",
  },
  {
    date: new Date(2022, 10, 19),
    item: " 🌖 Serenity",
    sum: 4,
    id: "b1",
  },
  {
    date: new Date(2025, 11, 1),
    item: " 🌑 Galatia",
    sum: 3,
    id: "c2",
  },
  {
    date: new Date(2022, 2, 3),
    item: " 🪐 Eterna",
    sum: 10,
    id: "d3",
  },
  {
    date: new Date(2022, 9, 4),
    item: " 🪐 Prometheus (Saturn XVI)",
    sum: 5,
    id: "e4",
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const targetRef = useRef(null);

  const scrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //to get input data from child to parent by chaining
  function addInputInfoData(cost) {
    // setCosts([cost, ...costs]) But this isn't correct state updating!!!
    setCosts((prevCosts) => {
      //PrevCosts includes actual state
      return [cost, ...prevCosts];
    });
  }

  return (
    <div className="app-container">
      <div className="content">
        <Header onIconClick={scrollToSection}/>
        <NewCost ref={targetRef} onAddCost={addInputInfoData} />
        <Costs costsValue={costs} />
      </div>
    </div>
  );
}

export default App;

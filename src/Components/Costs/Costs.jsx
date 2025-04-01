import { useState } from "react";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import Filter from "./Filter";

import "./costs.css";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  function handleYearChange(year) {
    setSelectedYear(year);
  }

  //controlled component <Filter />, component Costs is controller
  return (
    <>
      <Card className="costs__container">
        <Filter year={selectedYear} onYearSelect={handleYearChange} />
        {props.costsValue.map((item) => (
          <CostItem
            date={item.date}
            item={item.item}
            summa={item.sum}
            key={item.id}
          />
        ))}
      </Card>
    </>
  );
}

export default Costs;

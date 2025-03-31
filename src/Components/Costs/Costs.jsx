import { useState } from 'react';
import CostItem from "./CostItem";
import Card from "../UI/Card";
import Filter from "./Filter";

import "./costs.css";

function Costs(props) {

  const[selectedYear, setSelectedYear] = useState("2022");

  function handleYearChange(year) {
    setSelectedYear(year);
  }

  //controlled component <Filter />, component Costs is controller
  return (
    <>
    <Card className="costs__container">
    <Filter year={selectedYear} onYearSelect={handleYearChange}/> 
      <CostItem
        date={props.costsValue[0].date}
        item={props.costsValue[0].item}
        summa={props.costsValue[0].sum}
      />
      <CostItem
        date={props.costsValue[1].date}
        item={props.costsValue[1].item}
        summa={props.costsValue[1].sum}
      />
      <CostItem
        date={props.costsValue[2].date}
        item={props.costsValue[2].item}
        summa={props.costsValue[2].sum}
      />
    </Card>
    </>
  );
}

export default Costs;

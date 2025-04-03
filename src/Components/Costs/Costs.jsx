import { useState } from "react";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import Filter from "./Filter";
import DataDiagram from "./DataDiagram";

import "./costs.css";

function Costs({ costsValue }) {
  const [selectedYear, setSelectedYear] = useState("2022");

  function handleYearChange(year) {
    setSelectedYear(year);
  }

  //add filter method to filter cost item according to filtered date
  const filteredData = costsValue.filter((card) => {
    return card.date.getFullYear().toString() === selectedYear;
  });

  //controlled component <Filter />, component Costs is controller
  return (
    <>
      <Card className="costs__container">
        <DataDiagram year={selectedYear} costs={filteredData} />
        <Filter year={selectedYear} onYearSelect={handleYearChange} />

        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <CostItem
              date={item.date}
              item={item.item}
              summa={item.sum}
              key={item.id}
            />
          ))
        ) : (
          <span>There aren't any discoveries yet</span>
        )}
      </Card>
    </>
  );
}

export default Costs;

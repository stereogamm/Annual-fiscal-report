import { useState } from "react";
import SelectedYearContext from "../../context/SelectedYearContext";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import Filter from "./Filter";
import DataDiagram from "./DataDiagram";
import "./costs.css";

//parent component
function Costs({ costsValue }) {
  const [selectedYear, setSelectedYear] = useState("2022");

  //add filter method to filter cost item according to filtered date
  const filteredData = costsValue.filter((card) => {
    return card.date.getFullYear().toString() === selectedYear;
  });

  //controlled component <Filter />, component Costs is controller
  return (
    <SelectedYearContext.Provider value={{ selectedYear, setSelectedYear }}>
      <Card className="costs__container">
        <DataDiagram costs={filteredData} />
        <Filter />

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
    </SelectedYearContext.Provider>
  );
}

export default Costs;

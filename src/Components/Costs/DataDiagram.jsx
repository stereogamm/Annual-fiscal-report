import Diagram from "../Diagrams/Diagram";
import { useState, useEffect } from "react";

const diagramDatasets = [
  { label: "Jan", value: 0 },
  { label: "Fab", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "Jun", value: 0 },
  { label: "Jul", value: 0 },
  { label: "Aug", value: 0 },
  { label: "Sep", value: 0 },
  { label: "Oct", value: 0 },
  { label: "Nov", value: 0 },
  { label: "Dec", value: 0 },
];

function DataDiagram({ costs }) {
  useEffect(() => {
    calculateTotals();
  }, [costs]);
  const [data, setData] = useState([]);

  function calculateTotals() {
    let newData = diagramDatasets.map((item) => ({ ...item, value: 0 }));

    for (const cost of costs) {
      const costMonth = cost.date.getMonth();
      newData[costMonth].value += cost.sum;
    }

    setData(newData);
  }
  return (
    <>
      <Diagram dataSets={data} />
    </>
  );
}

export default DataDiagram;

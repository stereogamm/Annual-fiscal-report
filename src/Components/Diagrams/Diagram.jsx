import DiagramBar from "./DiagramBar";
import "./diagram.css";

//use dynamic render .map for dataSets. We created our own dataSet structure diagramDatasets
function Diagram({ dataSets }) {
  const dataSetsValues = dataSets.map((dataSet) => dataSet.value);
  const maxMonthcosts = Math.max(1, ...dataSetsValues);

  return (
    <div className="diagram">
      {dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthcosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
}

export default Diagram;

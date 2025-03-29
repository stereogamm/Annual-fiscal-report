import CostForm from "./CostForm";
import "./newCost.css";

function NewCost(props) {

  function dataFormHandler(allFormFieldsData) {
    const costData = {
      ...allFormFieldsData,
      id: "q4",
    };
    props.onAddCost(costData)
  }

  return (
    <div className="new-cost">
      <CostForm onSaveDataForm={dataFormHandler} />
    </div>
  );
}

export default NewCost;

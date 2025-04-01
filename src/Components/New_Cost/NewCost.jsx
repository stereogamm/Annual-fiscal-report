import { forwardRef } from "react";
import CostForm from "./CostForm";
import "./newCost.css";

const NewCost = forwardRef((props, ref) => {

  function dataFormHandler(allFormFieldsData) {
    const costData = {
      ...allFormFieldsData,
      id: "q4",
    };
    props.onAddCost(costData);
  }

  return (
    <div className="new-cost">
      <span ref={ref}>
        Nebula Chronicles is a space tracker that lets you become an explorer of
        deep space. Record discoveries of new planets and stars by entering the
        year of the expedition, the name of the celestial body, and its level of
        danger. Each discovery becomes part of your logbook, which you can view
        and analyze through annual graphs.
      </span>
      <CostForm onSaveDataForm={dataFormHandler} />
    </div>
  );
})

export default NewCost;

import { forwardRef, useState } from "react";
import CostForm from "./CostForm";
import "./newCost.css";
import NewCostContainer from "./NewCostContainer";

const NewCost = forwardRef(({ onAddCost }, ref) => {
  const [isFormVisible, setFormVisible] = useState(false);

  function dataFormHandler(allFormFieldsData) {
    const costData = {
      ...allFormFieldsData,
      id: "q4",
    };
    onAddCost(costData);
  }

  //show/hide form
  function formVisibleHandler() {
    setFormVisible((prev) => !prev);
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
      {!isFormVisible && <NewCostContainer onShowForm={formVisibleHandler} />}
      {isFormVisible && (
        <CostForm
          onHideForm={formVisibleHandler}
          onSaveDataForm={dataFormHandler}
        />
      )}
    </div>
  );
});

export default NewCost;

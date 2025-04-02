import "./costContainer.css";

function NewCostContainer({ onShowForm }) {
  return (
    <div className="newCostContainer">
      <button className="newCostContainer-button" type="button" onClick={onShowForm}>
        Make a discovery
      </button>
    </div>
  );
}

export default NewCostContainer;

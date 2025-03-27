import "./costForm.css";

function CostForm() {
  return (
    <>
      <form>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Cost</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
        </div>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Date</label>
            <input type="date" min="2020-01-01" max="2025-12-12" />
          </div>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add cost</button>
        </div>
      </form>
    </>
  );
}

export default CostForm;

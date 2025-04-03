import "./CostsFilter.css";

function Filter({ year, onYearSelect }) {
  function yearChangeHandler(event) {
    onYearSelect(event.target.value);
  }

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Select discovery year</label>
        <select value={year} onChange={yearChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;

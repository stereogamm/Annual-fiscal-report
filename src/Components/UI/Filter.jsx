import  "./CostsFilter.css";


function Filter() {
  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Select by year</label>
        <select>
          <option>--Select a year --</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;

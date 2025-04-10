import  { useContextYear }  from "../../context/SelectedYearContext";
import "./CostsFilter.css";

function Filter() {

const {selectedYear, setSelectedYear} = useContextYear();

 //to receive value from provider

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Select discovery year</label>
        <select value={selectedYear} onChange={setSelectedYear}>
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



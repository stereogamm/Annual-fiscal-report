import "./costDate.css";

function CostDate(props) {
  const month = props.dante.toLocaleString("en-EN", { month: "long" });
  const year = props.dante.getFullYear();
  const day = props.dante.toLocaleString("en-EN", { day: "2-digit" });

  return (
    <div className="cost-item__data">
      <div className="cost-item__month">{month}</div>
      <div className="cost-item__day">{day}</div>
      <div className="cost-item__year">{year}</div>
    </div>
  );
}

export default CostDate;

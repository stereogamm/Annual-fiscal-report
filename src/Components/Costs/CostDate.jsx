import "./costDate.css";

function CostDate({dante}) {
  const month = dante.toLocaleString("en-EN", { month: "long" });
  const year = dante.getFullYear();
  const day = dante.toLocaleString("en-EN", { day: "2-digit" });

  return (
    <div className="cost-item__data">
      <div className="cost-item__month">{month}</div>
      <div className="cost-item__day">{day}</div>
      <div className="cost-item__year">{year}</div>
    </div>
  );
}

export default CostDate;

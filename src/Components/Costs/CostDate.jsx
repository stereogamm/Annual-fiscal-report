import "./costDate.css";

function CostDate({date}) {
  const month = date.toLocaleString("en-EN", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-EN", { day: "2-digit" });

  return (
    <div className="cost-item__data">
      <div className="cost-item__month">{month}</div>
      <div className="cost-item__day">{day}</div>
      <div className="cost-item__year">{year}</div>
    </div>
  );
}

export default CostDate;

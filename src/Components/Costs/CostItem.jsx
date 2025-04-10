import CostDate from "./CostDate";
import Card from "../UI/Card";
import "./costItem.css";

function CostItem({date, item, summa}) {
  return (
    <Card className="cost-item">
      <CostDate date={date} />
      <h3 className="cost-item__name">{item}</h3>
      <div className="cost-item__summ">{summa} points</div>
    </Card>
  );
}

export default CostItem;

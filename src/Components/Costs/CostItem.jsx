import CostDate from "./CostDate";
import Card from "../UI/Card";

import "./costItem.css";

function CostItem(props) {
  return (
    <Card className="cost-item">
      <CostDate dante={props.date} />
      <h3 className="cost-item__name">{props.item}</h3>
      <div className="cost-item__summ">{props.summa}btc</div>
    </Card>
  );
}

export default CostItem;

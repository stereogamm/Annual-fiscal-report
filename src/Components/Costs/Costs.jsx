import CostItem from "./CostItem";
import Card from "../UI/Card";

import "./costs.css";

function Costs(props) {
  return (
    <Card className="costs__container">
      <CostItem
        date={props.costsValue[0].date}
        item={props.costsValue[0].item}
        summa={props.costsValue[0].sum}
      />
      <CostItem
        date={props.costsValue[1].date}
        item={props.costsValue[1].item}
        summa={props.costsValue[1].sum}
      />
      <CostItem
        date={props.costsValue[2].date}
        item={props.costsValue[2].item}
        summa={props.costsValue[2].sum}
      />
    </Card>
  );
}

export default Costs;

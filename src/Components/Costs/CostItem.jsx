import CostDate from "./CostDate";
import Card from "../UI/Card";
import { useState } from 'react';
import "./costItem.css";

function CostItem(props) {

const[item, setItem] = useState(props.item);


const changeItemHandler = () => {
  setItem('new item');
}

  return (
    <Card className="cost-item">
      <CostDate dante={props.date} />
      <h3 className="cost-item__name">{item}</h3>
      <div className="cost-item__summ">{props.summa}btc</div>
      <button onClick={changeItemHandler}>Change item</button>
    </Card>
  );
}

export default CostItem;

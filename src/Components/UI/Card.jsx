import "./card.css";

function Card(props) {
  const classes = `card__style ${props.className || ""}`;

  return <div className={classes}>{props.children}</div>;
}

export default Card;

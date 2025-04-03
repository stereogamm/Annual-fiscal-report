import "./diagramBar.css";

function DiagramBar({ value, maxValue, label }) {
  let barFillHight = "0%";

  if (maxValue > 0) {
    barFillHight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className="diagram-bar">
      <div className="diagram-bar__inner">
        <div
          className="diagram-bar__fill"
          style={{ height: barFillHight }}
        ></div>
      </div>
      <div className="diagram-bar__label">{label}</div>
    </div>
  );
}

export default DiagramBar;

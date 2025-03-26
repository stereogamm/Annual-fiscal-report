import Costs from "./Components/Costs/Costs";

import "./index.scss";

function App() {
  const coststInfo = [
    {
      date: new Date(2022, 10, 12),
      item: "Apple",
      sum: 2,
    },
    {
      date: new Date(2024, 10, 12),
      item: "Pear",
      sum: 4,
    },
    {
      date: new Date(2023, 11, 11),
      item: "Orange",
      sum: 6,
    },
  ];

  return (
    <>
      <Costs costsValue={coststInfo} />
    </>
  );
}

export default App;

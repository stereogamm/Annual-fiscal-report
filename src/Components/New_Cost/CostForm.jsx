import { useState } from "react";
import "./costForm.css";

function CostForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //     name: '',
  //     cost: '',
  //     date: '',
  // })

  function changeNameHandler(event) {
    setName(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     name: event.target.value,
    // })
    //the  better way to work with a several form fields - below
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         name: event.target.value,
    //     }
    // })
  }

  function changeCostHandler(event) {
    setCost(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     cost: event.target.value
    // }) the  better way to work with a several form fields - below
    //         setUserInput((previousState) => {
    //             return {
    //                 ...previousState,
    //                 cost: event.target.value,
    //             }
    //         })
  }

  function changeDateHandler(event) {
    setDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     date: event.target.value,
    // }) the  better way to work with a several form fields - below
    // setUserInput((previousState) => {
    //     return {
    //         ...previousState,
    //         date: event.target.value,
    //     }
    // })
  }

  function submitHandler(event) {
    //prevented form fields cleaning
    event.preventDefault();

    //created the finish user data obj from the fields data. We should hand over it to the App component to add to the coststInfo array futher
    const allFormFieldsData = {
      name: name,
      cost: cost,
      date: date instanceof Date ? date : new Date(date), //use date as an obj not str
    };

    //to clear the form fields after submit
    setName("");
    setCost("");
    setDate("");
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Name</label>
            <input type="text" value={name} onChange={changeNameHandler} />
          </div>
        </div>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Cost</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={changeCostHandler}
              value={cost}
            />
          </div>
        </div>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2025-12-12"
              onChange={changeDateHandler}
              value={date}
            />
          </div>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Add cost</button>
        </div>
      </form>
    </>
  );
}

export default CostForm;

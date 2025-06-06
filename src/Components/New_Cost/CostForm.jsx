import { useState } from "react";
import "./costForm.css";

function CostForm({ onSaveDataForm, onHideForm }) {
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
      item: name,
      sum: cost,
      date: date instanceof Date ? date : new Date(date), //use date as an obj not str
    };

    //call parent component function
    onSaveDataForm(allFormFieldsData);

    //to clear the form fields after submit
    setName("");
    setCost("");
    setDate("");

    //hide form when user click on decline button
    onHideForm();
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Planet name</label>
            <input type="text" value={name} onChange={changeNameHandler} />
          </div>
        </div>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Danger level</label>
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
            <label>Year of discovery</label>
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
          <button type="submit">Add planet</button>
          <button type="button" onClick={onHideForm}>
            Decline
          </button>
        </div>
      </form>
    </>
  );
}

export default CostForm;

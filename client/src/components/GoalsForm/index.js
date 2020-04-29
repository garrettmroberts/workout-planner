import React, { useState } from "react";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState"; 
import "./style.css";

function GoalsForm() {
  const [formState, setFormState] = useState({
    goal: "",
    equipment: []
  });

  const [store] = useStoreContext();

  function updateState(event) {
    // Prevents deafult
    event.preventDefault();

    // Saves key and value from target
    const type = event.target.dataset.type;
    const value = event.target.innerText;

    // Updates Goal
    if (type === "goal") {
      // Updates goal state
      setFormState({...formState, [type]: value});

      // Clears "active class from goals section"
      const buttons = document.querySelectorAll(".goalsbtn");
      buttons.forEach(button => {
        button.classList.remove("active");
      })

      // Makes event target active
      event.target.classList.add("active");
      
    // Updates equipment
    } else {
      // Toggles active class
      event.target.classList.toggle("active");

      // Adds value to equipment state if recently made active
      if (event.target.classList.contains("active")){
        setFormState({...formState, [type]: [...formState.equipment, value]}); 
      } else {
        // Here we remove from array if made inactive
        const idx = formState.equipment.indexOf(value);

        // A copy of equipment is created, spliced, and placed into equipment
        let newArr = formState.equipment
        formState.equipment.splice(idx, 1);
        setFormState({...formState, [type]: newArr});
      }
    };
  };

  function handleFormSubmit(event) {
    // Prevents event default
    event.preventDefault();

    // Updates active user's info in DB
    const id = store.currentUser._id;
    const userData = formState;
    API.updateUser(userData, id);

    // Updates the active user's data in global state
    store.currentUser.goal = formState.goal;
    store.currentUser.equipment = formState.equipment;

    // Clears form
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.classList.remove("active");
    });
  };

  return(
    <div id="content-container">
      <form>
        <div className="form-header">
          <h3>Let us help you build a workout regimen.</h3>
        </div>
        <div className="form-header">
          <h4>What is your main goal?</h4>
        </div>
        <div className="buttons-section">
          <button data-type="goal" onClick={updateState} className="goalsbtn">Bulk up</button>
          <button data-type="goal" onClick={updateState} className="goalsbtn">Cut weight</button>
        </div>
        <div className="form-header">
          <h4>What equipment do you have available?</h4>
        </div>
        <div className="buttons-section">
          <button data-type="equipment" onClick={updateState} className="equipbtn">Barbells</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Dumbbells</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Medicine Ball</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Curl Bar</button>
        </div>
        <div className="buttons-section">
          <button className="btn btn-primary" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}


export default GoalsForm;
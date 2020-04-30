import React, { useState } from "react";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState"; 
import "./style.css";

function GoalsForm() {
  const [formState, setFormState] = useState({
    goal: "",
    equipment: []
  });
  
  const [state, dispatch] = useStoreContext();

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

    
    // Clears form
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.classList.remove("active");
    });
    
    // Updates the active user's data in global state
    let updatedUser = state.currentUser;
    updatedUser.goal = formState.goal;
    updatedUser.equipment = formState.equipment;
    dispatch({type: 'updateUser', payload: updatedUser });

    // Updates active user's info in DB
    const id = state.currentUser._id;
    const userData = formState;
    API.updateUser(userData, id);

    // Generates a workout
    buildCalendar();
  };

  const buildCalendar = () => {
    API.getWorkouts()
      // res.data gets all workouts
      .then(res => {
        // Filters exercises to ones included in user's available equipment
        let filtered = [];
        if (state.currentUser.equipment.length > 0) {
          state.currentUser.equipment.forEach(item => {
            res.data.forEach(data => {
              // Adds to filtered array if user has correct equipment.
              if (data.equipment.join("") === item.toLowerCase()) {
                filtered.push(data);
              };
            });
          });
          // Adds bodyweight workouts after filtering by available equipment.
          res.data.forEach(data => {
            if (data.equipment.join("") === "") {
              filtered.push(data);
            };
          });
          console.log("FILTERED", filtered);
        } else {
          console.log("SELECTING BODYWEIGHT WORKOUTS");
          let filtered = [];
          res.data.forEach(data => {
            if (data.equipment.join("") === "") {
              filtered.push(data);
            };
          });
          console.log("FILTERED", filtered);
        };
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
          <button data-type="equipment" onClick={updateState} className="equipbtn">Barbell</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Dumbbell</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Exercise Ball</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Curl Bar</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Machine</button>
          <button data-type="equipment" onClick={updateState} className="equipbtn">Bicycle</button>
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
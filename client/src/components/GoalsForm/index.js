import React from "react";
import "./style.css";

function GoalsForm({state, setState}) {

  function updateState(event) {
    event.preventDefault();

    const type = event.target.dataset.type;
    const value = event.target.innerText;

    if (type === "goals") {
      setState({...state, [type]: value});
      console.log(state)
    } else {
      setState({...state, [type]: [...state.equipment, value]});
      console.log(state)
    }
  }

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
          <button data-type="goals" onClick={updateState}>Bulk up</button>
          <button data-type="goals" onClick={updateState}>Cut weight</button>
        </div>
        <div className="form-header">
          <h4>What equipment do you have available?</h4>
        </div>
        <div className="buttons-section">
          <button data-type="equipment" onClick={updateState}>Barbells</button>
          <button data-type="equipment" onClick={updateState}>Dumbbells</button>
          <button data-type="equipment" onClick={updateState}>Medicine Ball</button>
          <button data-type="equipment" onClick={updateState}>Curl Bar</button>
        </div>
        <div className="buttons-section">
          <button className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}


export default GoalsForm;
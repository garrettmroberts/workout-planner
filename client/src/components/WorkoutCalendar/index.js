import React from "react";
import axios from "axios";
import { useStoreContext, StoreProvider } from "../../utils/GlobalState";
import Card from "../Card";
import "./style.css";

function WorkoutCalendar() {
  const [state] = useStoreContext();
  console.log(state.currentUser.calendar);
  const workoutCards = state.currentUser.calendar.map(({ day, workouts }) => {
    return <Card day={day} key={day} workouts={workouts}/>
  });

  return(
    <div className="card-holder">
      {workoutCards}
    </div>
  );
};

export default WorkoutCalendar;
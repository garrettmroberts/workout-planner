import React, { useEffect } from "react";
import { DateTime } from "luxon";
import { useStoreContext } from "../../utils/GlobalState";
import Card from "../Card";
import "./style.css";

function WorkoutCalendar() {
  const [state] = useStoreContext();

  // Creates a workout for each card that is on either today or later
  const workoutCards = state.currentUser.calendar.map(({ day, workouts, jsDate}) => {
    const jsDateCleaned = DateTime.fromISO(jsDate).toISODate();
    const jsMilliseconds = DateTime.fromISO(jsDateCleaned).toMillis();
    const todayCleaned = DateTime.local().toISODate();
    const todayMilliseconds = DateTime.fromISO(todayCleaned).toMillis();
    
    console.log('in map function');
    // if statement is preventing cards from rendering initially
    // if (jsMilliseconds >= todayMilliseconds) {
      return <Card day={day} key={day} workouts={workouts} jsDate={jsDate} />
    // }
  });

  return(
    <div className="card-holder d-flex flex-wrap">
      {workoutCards}
    </div>
  );
};

export default WorkoutCalendar;
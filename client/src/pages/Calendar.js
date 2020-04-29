import React, { useState } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import GoalsForm from "../components/GoalsForm";
import WorkoutCalendar from "../components/WorkoutCalendar";
import "./calendar.css";

function Calendar() {
  const [store] = useStoreContext();
 
  return(
    <div className="wrapper">
      {(!store.currentUser.goal) ? <GoalsForm /> : <WorkoutCalendar />}
    </div>
  )
};
export default Calendar;
import React, { useState } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import GoalsForm from "../components/GoalsForm";
import WorkoutCalendar from "../components/WorkoutCalendar";
import "./calendar.css";

function Calendar(){
  const [formState, setFormState] =  useState({
    goals: "",
    equipment: []
  });

  const [store] = useStoreContext();
  
  return(
    <div className="wrapper">
      <GoalsForm state={formState} setState={setFormState}/>
      <WorkoutCalendar />
    </div>
  );
};
export default Calendar;
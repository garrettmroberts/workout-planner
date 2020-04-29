import React, { useState, useEffect } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import GoalsForm from "../components/GoalsForm";
import WorkoutCalendar from "../components/WorkoutCalendar";
import API from '../utils/API';
import "./calendar.css";

function Calendar() {
  const [store] = useStoreContext();
  
  return(
    <div className="wrapper">
      <GoalsForm />
      <WorkoutCalendar />
    </div>
  );
};
export default Calendar;
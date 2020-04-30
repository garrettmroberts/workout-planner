import React, { useState, useEffect } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import GoalsForm from "../components/GoalsForm";
import WorkoutCalendar from "../components/WorkoutCalendar";
import API from '../utils/API';
import "./calendar.css";

function Calendar() {
  const [store] = useStoreContext();

  const renderComponents = () => {
    if (store.currentUser.goal) {
      return <WorkoutCalendar />
    } else {
      return <GoalsForm />
    };
  };
  
  return(
    <div className="wrapper">
      {renderComponents()}
    </div>
  )
};
export default Calendar;
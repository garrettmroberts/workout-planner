import React, { useState } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import "../components/GoalsForm";
import "./calendar.css";
import GoalsForm from '../components/GoalsForm';

function Calendar(){
  const [formState, setFormState] =  useState({
    goals: "",
    equipment: []
  });
  const [store] = useStoreContext();
  return(
    <div className="wrapper">
      <GoalsForm state={formState} setState={setFormState}/>
    </div>
  )
};
export default Calendar;
import React, { useState, useEffect } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import GoalsForm from "../components/GoalsForm";
import WorkoutCalendar from "../components/WorkoutCalendar";
import API from '../utils/API';
import "./calendar.css";

function Calendar(){
  const [formState, setFormState] =  useState({
    goals: "",
    equipment: []
  });

  const [, dispatch] = useStoreContext();
  //get user data from api and store to global context
  useEffect(()=>{
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);
  
  return(
    <div className="wrapper">
      <GoalsForm state={formState} setState={setFormState}/>
      <WorkoutCalendar />
    </div>
  );
};
export default Calendar;
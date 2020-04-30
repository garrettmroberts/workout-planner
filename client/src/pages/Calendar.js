import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useStoreContext } from "../utils/GlobalState";
import GoalsForm from "../components/GoalsForm";
import WorkoutCalendar from "../components/WorkoutCalendar";
import API from '../utils/API';
import "./calendar.css";

function Calendar() {
  const [store, dispatch] = useStoreContext();

  useEffect(()=> {
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);

  const renderComponents = () => {
    //send user to homepage if they are not logged in
    if(!store.currentUser){
      return(
        <Redirect to='/'/>
      );
    }
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
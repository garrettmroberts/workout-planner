import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';
import { useStoreContext } from '../utils/GlobalState'
import API from '../utils/API';


function CreateWorkout(){
  const [state, dispatch] = useStoreContext();

  //get user data from api and store to global context
  useEffect(()=>{
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);
  
  const render = () => {
    if(!state.currentUser){
      return(
        <Redirect to='/'/>
      )
    }
  return(
    <div className ='wrapper'>
      <h1>Create Workout</h1>
      <WorkoutForm />
    </div>
  );
  };
  return(
    <div>{render()}</div>
  );
  
};
export default CreateWorkout;
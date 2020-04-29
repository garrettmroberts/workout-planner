import React, { useEffect } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import { useStoreContext } from '../utils/GlobalState'
import API from '../utils/API';

function CreateWorkout(){
  const [, dispatch] = useStoreContext();

  //get user data from api and store to global context
  useEffect(()=>{
    console.log('USEEFFECT CREATEWORKOUT');
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);

  return(
    <div>
      <h1>Create Workout</h1>
      <WorkoutForm />
    </div>
  )
};
export default CreateWorkout;
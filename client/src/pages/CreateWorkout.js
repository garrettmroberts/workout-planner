import React from 'react';
import WorkoutForm from '../components/WorkoutForm';
import { useStoreContext } from '../utils/GlobalState'

function CreateWorkout(){
  const [store] = useStoreContext();
  console.log('STORE in createworkout ', store);
  return(
    <div>
      <h1>Create Workout</h1>
      <WorkoutForm />
    </div>
  )
};
export default CreateWorkout;
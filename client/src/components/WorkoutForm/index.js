import React, { useRef } from 'react';
import API from '../../utils/API';

function WorkoutForm(){

  const catRef = useRef();
  const equipmentRef = useRef();
  const nameRef = useRef();
  const groupRef = useRef();
  
  function makeArray(input){
    return input.split(', ');
  };

  function prepareSubmission(){
    let muscleGroup = makeArray(groupRef.current.value);
    let equipment = makeArray(equipmentRef.current.value);
    let newWorkout = {
      name: nameRef.current.value,
      category: catRef.current.value,
      muscleGroup: muscleGroup,
      equipment: equipment
    }
    console.log('NEWWORKOUT: ', newWorkout);
    return newWorkout;
  }

  function handleSubmit(e){
    e.preventDefault();
    let workoutToAdd = prepareSubmission();
    console.log('WTA: ', workoutToAdd);

    API.addWorkout(workoutToAdd)
    .then(res => console.log("Respone: ", res.data))
    .catch(err => console.log(err));

    catRef.current.value = '';
    groupRef.current.value = '';
    equipmentRef.current.value = '';
    nameRef.current.value = '';
  }

  return (
    <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
      <input className="form-control mb-5" required ref={nameRef} placeholder="Name" />
      <input className="form-control mb-5" ref={catRef} placeholder="Category" />
      <input className="form-control mb-5" required ref={equipmentRef} placeholder="Equipement needed" />
      <input className="form-control mb-5" required ref={groupRef} placeholder="Targeted Muscles" />
      <button className="btn btn-success mt-3 mb-5" type="submit">Make User</button>
    </form>
  );
};
export default WorkoutForm;
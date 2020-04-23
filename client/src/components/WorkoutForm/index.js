import React, { useRef } from 'react';

function WorkoutForm(){

  const catRef = useRef();
  const equipmentRef = useRef();
  const nameRef = useRef();
  const groupRef = useRef();
  
  function handleSubmit(e){
    e.preventDefault();
    console.log('you clicked');
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
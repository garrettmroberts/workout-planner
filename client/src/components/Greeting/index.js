import React from 'react';
import './Greeting.css';

function Greeting () {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Welcome to Workout Tracker</h1>
        <p className="lead">You made the first step towards achieving your fitness goals.</p> 
        <p className='lead'>Sign up or Log in to continue</p>
      </div>
    </div>
  );
};

export default Greeting;
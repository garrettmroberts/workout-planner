import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import './style.css';
import Card from "../Card";

function CurrentUser (){

  const [state,] = useStoreContext();
  const user = state.currentUser;

  const listItems= (itemArray, itemName) => {

      if(itemArray !== user.goals){
        if (itemArray.length > 0){
          return (
            <div>
            {itemArray.map((e,i) => (
              <li className='list-group-item' key={i}>
                {e}
              </li>
            ))}
            </div>
          );
        } else {
          return (
            <p>No {itemName} Added</p>
          );
        }
    }
    
  };

  const setCalendar = () => {
    console.log(user.calendar);

    if(user.calendar.length > 0){
      const workoutSection = user.calendar[0].workouts.map(workout => {
        if (workout.category === "strength") {
          return <li className="list-group-item" key={Math.floor(Math.random() * 100000)}>
            <strong>{workout.name}</strong> - {workout.sets}
          </li>
        } else {
          return <li className="list-group-item" key={Math.floor(Math.random() * 100000)}>
            <strong>{workout.name}</strong> - {workout.time}
          </li >
        }
      })
      return (
        <div className="card cal-card border-dark mb-3">
          <div className="card-header">Up next on my calendar:{' '} {user.calendar[0].day}</div>
          <div className="card-body text-dark">
            <ul className="list-group list-group-flush">
              {workoutSection}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className="card cal-card border-dark mb-3">
          <div className="card-header">No calendar made yet</div>
          <div className='card-body text-dark'>
          </div>
        </div>
      )
    }
  }
  const getRender = () => {
    return (
      <div className ='container'>
        <div className='row'>
          <div className='col'>
            <div className="card user-card border-dark mb-3">
              <div className="card-header">My Equipment</div>
                <div className="card-body text-dark">
                  <ul className="list-group list-group-flush">
                    {listItems(user.equipment, 'Equipment')}
                  </ul>
                </div>
            </div>
          </div>
          <div className='col'>
            <div className="card user-card border-dark mb-3">
              <div className="card-header">My Goal</div>
                <div className="card-body text-dark">
                  <ul className="list-group list-group-flush">
                    {user.goal ? user.goal : <p>No goal set yet</p>}
                  </ul>
                </div>
            </div>
          </div>
        </div>
        {setCalendar()}
      </div>
    );
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container" >
          <h2 className="display-4">Welcome, {user.firstName}</h2>
        </div>
      </div>
      {getRender()}
    </div>
  );
};
export default CurrentUser;
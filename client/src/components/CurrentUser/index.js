import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import './style.css';

function CurrentUser (){

  const [state,] = useStoreContext();
  const user = state.currentUser;

  const listItems= (itemArray, itemName) => {
    if (itemArray.length > 0){
      return (
        <div>
        {itemArray.map((e,i) => (
          <li key={i}>
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
  };


  const getRender = () => {
    return (
      <div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">My Equipment</h5>
              {listItems(user.equipment, 'Equipment')}
            </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">My Goals</h5>
            {listItems(user.goals, 'Goals')}
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">My Calendar</h5>
            {listItems(user.calendar, 'Calendar')}
          </div>
        </div>
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
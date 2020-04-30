import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import './style.css';

function CurrentUser (){

  const [state,] = useStoreContext();
  const user = state.currentUser;

  const listItems= (itemArray, itemName) => {
    if (2 === 3) {

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
    }
  };


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
        <div className="card cal-card border-dark mb-3">
          <div className="card-header">My Calendar</div>
            <div className="card-body text-dark">
              <ul className="list-group list-group-flush">
                {listItems(user.calendar, 'Calendar')}
              </ul>
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
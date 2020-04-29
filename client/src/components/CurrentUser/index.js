import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import './style.css';

function CurrentUser (){

  const [state,] = useStoreContext();
  const user = state.currentUser;

  function generateLists(){
    return (
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container" >
          <h2 className="display-4">Welcome, {user.firstName}</h2>
        </div>
      </div>
      {generateLists()}
    </div>
  )
};
export default CurrentUser;
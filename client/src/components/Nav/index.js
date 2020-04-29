import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import API from '../../utils/API';

function Nav() {

  //Test nav component to read to store and return to home page
  const [store, dispatch] = useStoreContext();
  const logOut = () =>{
    API.logout().then(res =>{
      console.log('RES IN LOGOUT ', res);
      dispatch({type: 'logout'} );

    }).catch(err => console.log(err));
  }

  if (store.isLoggedIn) {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Workout Tracker
        </Link>
        <Link className='nav-link' to='/user'>User</Link>
        <Link className='nav-link' to='/calendar'>Calendar</Link>
        <Link className='nav-link' to='/create'>Create</Link>
        <Link className='nav-link' to='/recent'>Recent</Link>
        <Link className='nav-link' to='/search'>Search</Link>
        <button className='btn btn-warning' onClick={logOut}>Logout</button>
      </nav>
    );
  } else {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Workout Tracker
        </Link>
        <Link className='nav-link' to='/signUp'>Sign Up</Link>
        <Link className='nav-link' to='/signIn'>Sign In</Link>
      </nav>
    )
  }
}

export default Nav;
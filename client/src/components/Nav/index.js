import React from "react";
import { Link } from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import API from '../../utils/API';
import './style.css';

function Nav() {

  //Test nav component to read to store and return to home page
  const [store, dispatch] = useStoreContext();
  const logOut = () =>{
    API.logout().then(res =>{
      console.log('RES IN LOGOUT ', res);
      dispatch({type: 'logout'} );

    }).catch(err => console.log(err));
  }

  const signUp =  (e) => {
    e.preventDefault()
    dispatch({ type: 'showsignup' });
  };
  const logIn = (e) => {
    e.preventDefault()
    dispatch({type: 'showlogin'});
  };

  const setRender = () => {
    if (store.isLoggedIn) {
      return(
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            Workout Tracker
          </Link>
          <Link className='nav-link' to='/calendar'>Calendar</Link>
          <Link className='nav-link' to='/create'>Create</Link>
          <Link className='nav-link' to='/search'>Search</Link>
          <button className='nav-btns btn btn-warning' onClick={logOut}>Logout</button>
        </nav>
      );
    } else {
      return(
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/"> Workout Tracker </Link>
          <form className='form-inline'>
            <button className='nav-btns btn btn-info left-btn' onClick={signUp}>Sign Up</button>
            <button className='btn nav-btns btn-info right-btn' onClick={logIn}>Log In</button>
          </form>
        </nav>
      )
    }
  };

  return (
    <div>
      {setRender()}
    </div>
  );
  
};

export default Nav;
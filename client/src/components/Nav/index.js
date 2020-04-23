import React from "react";
import { Link } from 'react-router-dom';
// import { useStoreContext } from "../../utils/GlobalState";

function Nav() {

  //Test nav component to read to store and return to home page
  // const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Workout Tracker
      </Link>
      <Link className='nav-link' to='/user'>User</Link>
      <Link className='nav-link' to='/calendar'>Calendar</Link>
      <Link className='nav-link' to='/create'>Create</Link>
      <Link className='nav-link' to='/recent'>Recent</Link>
      <Link className='nav-link' to='/search'>Search</Link>
    </nav>
  );
}

export default Nav;
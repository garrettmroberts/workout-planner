import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {

  //Test nav component to read to store and return to home page

  const [store] = useStoreContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Workout Tracker
      </a>
      <a className='nav-link' href='/user'>User</a>
      <a className='nav-link' href='/calendar'>Calendar</a>
      <a className='nav-link' href='/create'>Create</a>
      <a className='nav-link' href='/recent'>Recent</a>
      <a className='nav-link' href='/search'>Search</a>
    </nav>
  );
}

export default Nav;
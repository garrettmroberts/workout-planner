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
      <p>{store.test}</p>
    </nav>
  );
}

export default Nav;
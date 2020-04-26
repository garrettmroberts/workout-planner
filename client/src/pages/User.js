import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import SignUpForm from '../components/SignUpForm'

//placeholder to test global store and nav
function User() {
  const [store] = useStoreContext();
  if (!store.isLoggedIn) {
    return(
      <div>
        <h1>User Page</h1>
        <p>{store.test}</p>
        <SignUpForm />
      </div>
    );
  } else {
    return(
      <div>
        <h4>This is where we should initialize the page for a logged in user.</h4>
      </div>
    )
  }
};
export default User;
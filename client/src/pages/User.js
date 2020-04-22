import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import SignUpForm from '../components/SignUpForm'

//placeholder to test global store and nav
function User() {
  const [store] = useStoreContext();
  return(
    <div>
      <h1>User Page</h1>
      <p>{store.test}</p>
      <SignUpForm />
    </div>
  );
};
export default User;
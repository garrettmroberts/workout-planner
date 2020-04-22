import React from "react";
import { useStoreContext } from "../utils/GlobalState";

//placeholder to test global store and nav
function User() {
  const [store] = useStoreContext();
  return(
    <div>
      <h1>User Page</h1>
      <p>{store.test}</p>
    </div>
  );
};
export default User;
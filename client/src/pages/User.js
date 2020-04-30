import React, { useEffect } from "react";
import { useStoreContext } from "../utils/GlobalState";
import SignUpForm from '../components/SignUpForm'
import API from '../utils/API';

//Probably dont need this page but Ill leave it for now


//placeholder to test global store and nav
function User() {
  
  const [store, dispatch] = useStoreContext();

  //get user data from api and store to global context
  useEffect(()=>{
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);

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
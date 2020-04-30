import React, { useState, useEffect } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import API from '../utils/API';
import CurrentUser from '../components/CurrentUser';
import Greeting from '../components/Greeting';


function Home() {
  const [state, dispatch] = useStoreContext();
  
  //get user data from api and store to global context
  useEffect(()=> {
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);

  const getStuffToRender = () =>{
    let user = state.currentUser;
    if(user){
      return (
        <CurrentUser />
      );
    } else {
      return (
        <div className='wrapper'>
          <Greeting />
          {state.showSignUp ? <SignUpForm /> : <p></p> }
          {state.showLogIn ? <LoginForm /> : <p></p> }
        </div>
      );
    }
  };

  return(
    <div className='wrapper'>
      {getStuffToRender()}
    </div>
  );
};
export default Home;
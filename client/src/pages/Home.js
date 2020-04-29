import React, { useState, useEffect } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import API from '../utils/API';
import CurrentUser from '../components/CurrentUser';


function Home() {

  const [signUp, setSignUp] = useState();

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
      )
    } else {
      return (
        <div>
          <button className="btn btn-success mt-3 mb-5" onClick={()=>setSignUp(!signUp)}>
          {`${signUp ? 'Login': 'Sign up'} `}
          </button>
          {signUp ? <SignUpForm /> : <LoginForm /> }
      </div>
      );
    }
  };

  return(
    <div>
      {getStuffToRender()}
    </div>
  );
};
export default Home;
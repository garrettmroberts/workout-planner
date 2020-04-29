import React, { useState, useEffect } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import API from '../utils/API';


function Home() {

  const [signUp, setSignUp] = useState();
  const [state, dispatch] = useStoreContext();

  //get user data from api and store to global context
  useEffect(()=>{
    console.log('USEEFFECT HOME');
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);

  return(
    <div>
      <h1>Home Page</h1>
      <button className="btn btn-success mt-3 mb-5" onClick={()=>setSignUp(!signUp)}>
        {`${signUp ? 'Login': 'Sign up'} `}
      </button>
      {signUp ? <SignUpForm /> : <LoginForm /> }
      <p>{state.test}</p>
    </div>
  );
};
export default Home;
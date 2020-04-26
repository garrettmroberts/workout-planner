import React, { useState } from 'react';
import { useStoreContext } from "../utils/GlobalState";
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';


function Home() {

  const [signUp, setSignUp] = useState();
  const [store] = useStoreContext();

  return(
    <div>
      <h1>Home Page</h1>
      <button className="btn btn-success mt-3 mb-5" onClick={()=>setSignUp(!signUp)}>
        {`${signUp ? 'Login': 'Sign up'} `}
      </button>
      {signUp ? <SignUpForm /> : <LoginForm /> }
      <p>{store.test}</p>
    </div>
  );
};
export default Home;
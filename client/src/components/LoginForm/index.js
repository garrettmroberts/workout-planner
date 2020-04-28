import React, { useRef, useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import API from '../../utils/API';

export default function LoginForm() {

  const [state, dispatch] = useStoreContext();

  const userRef = useRef();
  const pwRef = useRef();

  useEffect(()=> {
    console.log('STATE IN DISPATCH', state);
  });
  const handleSubmit = (e) =>{
    e.preventDefault();
    const user= {
      email: userRef.current.value,
      password: pwRef.current.value,
    }
    API.login(user).then(res => {

      console.log('ABOUT TO CALL DISPATACH, RES.DATA: ', res.data);

      // update global state with current user data
      dispatch({
        type: 'setuser',
        user: res.data,
        test: 'we got us a user'
      })
    })
    .catch(err => console.log(err));
    
    userRef.current.value = "";
    pwRef.current.value = "";
  };
  return (
    <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" ref={userRef} placeholder="Email" />
        <input className="form-control mb-5" required ref={pwRef} placeholder="password" />
        <button className="btn btn-success mt-3 mb-5" type="submit">Sign In</button>
    </form>
  );
};
import React, { useRef, useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import API from '../../utils/API';

export default function LoginForm() {

  const [, dispatch] = useStoreContext();

  const userRef = useRef();
  const pwRef = useRef();

  useEffect(()=> {
    dispatch({
      type: 'consolelog'
    });
  });

  const handleSubmit = (e) =>{
    e.preventDefault();

    const user= {
      email: userRef.current.value,
      password: pwRef.current.value,
    }

    API.login(user).then(res => console.log(res.data))
    .catch(err => console.log(err));
    
    dispatch({
      type: 'login',
      user,
      test: 'you logged in'
    });

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
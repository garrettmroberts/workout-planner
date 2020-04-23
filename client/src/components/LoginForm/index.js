import React, { useRef, useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';

export default function LoginForm() {

  const [state, dispatch] = useStoreContext();

  const userRef = useRef();
  const pwRef = useRef();

  useEffect(()=> {
    dispatch({
      type: 'consolelog'
    });
  });

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch({
      type: 'login',
      user: {
        username: userRef.current.value,
        password: pwRef.current.value,
      },
      test: 'you logged in'
    });
    console.log('State in loginform: ' ,state);

  };
  return (
    <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" ref={userRef} placeholder="Username" />
        <input className="form-control mb-5" required ref={pwRef} placeholder="password" />
        <button className="btn btn-success mt-3 mb-5" type="submit">Sign Up</button>
      </form>
  );
};
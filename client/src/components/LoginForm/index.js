import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import API from '../../utils/API';
import "./style.css";

export default function LoginForm() {

  const [, dispatch] = useStoreContext();

  const userRef = useRef();
  const pwRef = useRef();

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
      });
    })
    .catch(err => console.log(err));
    
    userRef.current.value = "";
    pwRef.current.value = "";
  };
  return (
    <form id="login-form" className="p-3 rounded" onSubmit={handleSubmit}>
      <div className='form-row text-left mb-2'>
        <div className='col-md-6'>
          <label>Email</label>
          <input className="form-control" ref={userRef} placeholder="Email" />
        </div>
        <div className = 'col-md-6'>
          <label>Password</label>
          <input className="form-control" required ref={pwRef} type="password" placeholder="Password" />
        </div>
      </div>
        <button className="btn btn-success" type="submit">Sign In</button>
    </form>
  );
};
import React, { useRef } from 'react';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";
import "./style.module.css";


function SignUpForm(){

  const [,dispatch] = useStoreContext();
  //list of references to differentiate inputs
  const emailRef = useRef();
  const firstRef = useRef();
  const lastRef = useRef();
  const pwRef1 = useRef();
  const pwRef2 = useRef();
  let password = null;

  //read two passwords so we can make sure they are the same
  const handleSubmit =  e => {
    e.preventDefault();

    const pw1 = pwRef1.current.value;
    const pw2 = pwRef2.current.value;
    const email = emailRef.current.value;

    if(validateInputs(email, pw1, pw2)){
      let newUser = {
        email,
        password: pw1,
        firstName: firstRef.current.value,
        lastName: lastRef.current.value
      };

      //get unhashed password to send to login
      password = pw1;
  
      //adds user to the database
      API.addUser(newUser)
      .then(res => {
        const user = res.data;
        if(res.data){
          //log in the user after they are added to the database
          API.login({email: newUser.email, password: password})
          .then(() =>{
            password = null; //clear out password after succesful login
          })
          .catch(err=>console.log(err));
          dispatch({ type: 'setuser', user: user})

          password = null; //clear out password
        }
      })
      .catch(err => console.log(err));
    }
    //TODO
    //alert user of invalid input

    //clear input fields
    emailRef.current.value = '';
    firstRef.current.value = '';
    lastRef.current.value = '';
    pwRef1.current.value = '';
    pwRef2.current.value = '';
  };


  //funciton returns a boolean depending on if the string matches the reg ex inside
  const checkPassword = password => {
    const pwRegEx = /[a-zA-Z0-9]{8,}/;
    return pwRegEx.test(password);
  };

  //funciton returns a boolean depending on if the string matches the reg ex inside
  const checkEmail = email => {
    const emailRegEx = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailRegEx.test(email);
  }

  // function to validate user email and password inputs
  //returns a boolean value
  function validateInputs(email, pw1, pw2){

    if (pw1 === pw2 && checkEmail(email) && checkPassword(pw1) && checkPassword(pw2)){
      console.log('valid inputs');
      return true
    } else if (pw1 !== pw2){
      console.log('Your passwords do not match');
      return false
    } else if (!checkPassword(pw1) || !checkPassword(pw2)){
      console.log('Your password does not meet the minimum requirements');
      return false
    } else if (!checkEmail(email)){
      console.log('You did not enter a valid email');
      return false
    }  
  }

  return (
    <form onSubmit={handleSubmit} id="signup-form" className="p-3 rounded">
      <div className="form-row text-left mb-2">
        <div className="col-md-6">
          <label>First Name</label>
          <input className="form-control" ref={firstRef} placeholder="First name" />
        </div>
        <div className="col-md-6">
          <label>Last Name</label>
          <input className="form-control" ref={lastRef} placeholder="Last name" />
        </div>
      </div>
      <div className="form-group text-left">
        <label>Email</label>
        <input className="form-control" required ref={emailRef} placeholder="Email" />
        <small class="form-text">Don't worry.  We'll never share your email with anyone else.</small>
      </div>
      <div className="form-row text-left mb-2">
        <div className="col-md-6">
          <label>Password</label>
          <input className="form-control" required ref={pwRef1} placeholder="password" type="password" />
        </div>
        <div className="col-md-6">
          <label>Re-enter password</label>
          <input className="form-control" required ref={pwRef2} placeholder="re enter password" type="password" />
        </div>
      </div>
      <button className="btn btn-success" type="submit">Create User</button>
    </form>
  );
}
export default SignUpForm;
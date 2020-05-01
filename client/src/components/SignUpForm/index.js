import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../../utils/API';
import { useStoreContext } from "../../utils/GlobalState";

function SignUpForm(){

  const [,dispatch] = useStoreContext();
  //list of references to differentiate inputs
  const emailRef = useRef();
  const firstRef = useRef();
  const lastRef = useRef();
  const pwRef1 = useRef();
  const pwRef2 = useRef();

  //read two passwords so we can make sure they are the same
  const handleSubmit = e => {
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

      //adds user to the database
      API.addUser(newUser)
      .then(res => {
        console.log('res.data ', res.data);
        const user = res.data;
        if(res.data){
          dispatch({ type: 'setuser',user: user})
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

  const redirect = () => {
    console.log('wtf');
    return ( <Redirect to='/'/> );
  }


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
    <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
      <div className='row'>
        <div className = 'col'>
          <input className="form-control mb-5" ref={firstRef} placeholder="First name" />
        </div>
        <div className ='col'>
          <input className="form-control mb-5" ref={lastRef} placeholder="Last name" />
        </div>
      </div>
      <input className="form-control mb-5" required ref={emailRef} placeholder="Email" />
      {/* TODO: change password fields to hidden text */}
      <div className='row'>
          <div className = 'col'>
            <input className="form-control mb-5" required ref={pwRef1} placeholder="password" />
          </div>
          <div className ='col'>
            <input className="form-control mb-5" required ref={pwRef2} placeholder="re enter password" />
          </div>
        </div>
      <button className="btn btn-success mt-3 mb-5" type="submit">Make User</button>
    </form>
  );
}
export default SignUpForm;
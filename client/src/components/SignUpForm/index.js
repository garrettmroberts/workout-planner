import React, { useRef } from 'react';


//basic sign up form that only console logs information at the moment
function SignUpForm(){

  //list of references to differentiate inputs
  const emailRef = useRef();
  const userRef = useRef();
  const pwRef1 = useRef();
  const pwRef2 = useRef();

  //just console logging inputs for now
  //read two passwords so we can make sure they are the same
  const handleSubmit = e => {
    e.preventDefault();
    console.log("you submitted the form");
    console.log('email ', emailRef.current.value);
    console.log('user ', userRef.current.value);
    console.log('pw ', pwRef1);
    console.log('pwcheck ', pwRef2);
  };

  return (
    <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
      <input className="form-control mb-5" required ref={emailRef} placeholder="Email" />
      <input className="form-control mb-5" ref={userRef} placeholder="Username" />
      <input className="form-control mb-5" required ref={pwRef1} placeholder="password" />
      <input className="form-control mb-5" required ref={pwRef2} placeholder="re enter password" />
      <button className="btn btn-success mt-3 mb-5" type="submit">Make User</button>
    </form>
  );
}
export default SignUpForm;
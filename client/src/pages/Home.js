import React from 'react';
import { useStoreContext } from "../utils/GlobalState";
import LoginForm from '../components/LoginForm';


function Home() {
  const [store] = useStoreContext();
  return(
    <div>
      <h1>Home Page</h1>
      <LoginForm />
      <p>{store.test}</p>
    </div>
  );
};
export default Home;
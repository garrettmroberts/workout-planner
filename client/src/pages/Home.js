import React from 'react';
import { useStoreContext } from "../utils/GlobalState";


function Home() {
  const [store] = useStoreContext();
  return(
    <div>
      <h1>Home Page</h1>
      <p>{store.test}</p>
    </div>
  );
};
export default Home;
import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState'
import API from '../utils/API';

function Search(){
  const [, dispatch] = useStoreContext();

  //get user data from api and store to global context
  useEffect(()=>{
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  });
  return(
    <h1>Search</h1>
  )
};
export default Search;
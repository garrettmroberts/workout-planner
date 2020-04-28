import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

//function to pass to useReducer()
const reducer = (state, action) => {
// TODO: insert switch cases here 
  switch (action.type){
    case 'login':
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.user,
        test: action.test
      };
    case 'consolelog':
      console.log('STATE in reducer consolelog: ', state);
      return state;
    case 'setuser':
      //set currentUser, but clear password 
      //keeping isLoggedIn boolean for the time being
      let userToSet = action.user;
      delete userToSet.password;
      return {
        ...state,
        currentUser: userToSet,
        test: action.test,
        isLoggedIn: true
      }
    case 'logout':
      return{
        ...state,
        currentUser: null
      }
    default:
      console.log('STATE in reducer: ', state);
      return state;
  }
};

const StoreProvider = ({...props}) => {
  const [state, dispatch] = useReducer(reducer , {
    currentUser: null,
  });
  return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
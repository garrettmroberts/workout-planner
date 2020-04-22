import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

//function to pass to useReducer()
const reducer = (state, action) => {
// TODO: insert switch cases here 
};

const StoreProvider = ({...props}) => {
  const [state, dispatch] = useReducer(reducer , {

    test: 'If you can see this you are reading from the store'
    // TODO
    // insert default state object
  });
  return <Provider value={[state, dispatch]} {...props} />
};

const useStoreContext = () => useContext(StoreContext);

export { StoreProvider, useStoreContext };
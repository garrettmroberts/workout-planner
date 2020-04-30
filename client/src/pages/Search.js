import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState'
import API from '../utils/API';

function Search(){
  const [, dispatch] = useStoreContext();

  let timeoutID; //ID to clear timeout if textfield changes

  //get user data from api and store to global context
  useEffect(()=>{
    getAllWorkouts();
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);

  const getAllWorkouts = () => {
    API.getWorkouts()
    .then(res => console.log('Res.data from getall ', res.data))
    .catch(err => console.log(err));
  };
  
  const handleChange = (e) => {
    clearTimeout(timeoutID); //clear timeout if input changes
    const { name, value } = e.target;

    console.log('name ', name, value);
    
    debounce(name, value, 700); //send API search after 700 ms
  }

  const debounce = (name, value, interval) => {
    timeoutID = setTimeout(() => {
      if(value){
        switch (name){
          case 'equipment-search':
            API.findByEquipment(value)
            .then(res => console.log('resInDeBOUNCe, ', res.data))
            .catch(err => console.log(err));
            break
          case 'muscle-search':
            API.findByMuscle(value)
            .then(res=> console.log('res.data ', res.data))
            .catch(err => console.log(err));
            break
          case 'category-search':
            API.findByCategory(value)
            .then(res => console.log('res.data ', res.data))
            .catch(err => console.log(err));
            break
          default:
            console.log('HIT DEFAULT');
        }
      }
    }, interval);
  };
  // const renderWorkouts = () => {

  // };

  return(
    <div className='wrapper'>
      <form>
        <p>Search by equipment</p>
        <input type='text' onChange={handleChange} name='equipment-search'/>
        <p>Search by muscle group</p>
        <input type='text' onChange={handleChange} name='muscle-search'/>
        <p>Search by category</p>
        <input type='text' onChange={handleChange} name='category-search'/>
      </form>
    </div>
  )
};
export default Search;
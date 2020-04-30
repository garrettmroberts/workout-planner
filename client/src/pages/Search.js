import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState'
import API from '../utils/API';

function Search(){
  const [state, dispatch] = useStoreContext();

  let timeoutID; //ID to clear timeout if textfield changes

  //get user data from api and store to global context
  useEffect(()=>{
    getAllWorkouts();
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);

  //check when workoutsToRender gets set
  useEffect(()=>{
    console.log('HIT NEW USEEFFECT');
  }, [state.workoutsToRender]);

  const getAllWorkouts = () => {
    API.getWorkouts()
    .then(res => console.log('Res.data from getall ', res.data))
    .catch(err => console.log(err));
  };
  
  const handleChange = (e) => {
    clearTimeout(timeoutID); //clear timeout if input changes
    const { name, value } = e.target;

    console.log('name ', name, value);
    
    debouncedSearch(name, value, 700); //send API search after 700 ms
  }

  const debouncedSearch = (name, value, interval) => {
    timeoutID = setTimeout(() => {
      if(value){
        switch (name){
          case 'equipment-search':
            API.findByEquipment(value)
            .then(res => {
              console.log('resInDeBOUNCe, ', res.data)
              dispatch({type: 'setworkouts', payload: res.data})
            })
            .catch(err => console.log(err));
            break
          case 'muscle-search':
            API.findByMuscle(value)
            .then(res=> {
              console.log('res.data ', res.data)
              dispatch({type: 'setworkouts', payload: res.data})
            })
            .catch(err => console.log(err));
            break
          case 'category-search':
            API.findByCategory(value)
            .then(res => {
              console.log('res.data ', res.data)
              dispatch({type: 'setworkouts', payload: res.data})
            })
            .catch(err => console.log(err));
            break
          default:
            console.log('HIT DEFAULT');
        }
      }
    }, interval);
  };

  const renderWorkouts = () => {
    if(state.workoutsToRender){
      return(
        <div>
          {state.workoutsToRender.map(wo => 
            <div key={wo._id}className="card border-dark mb-3">
              <div className="card-header">{wo.name}r</div>
              <div className="card-body text-dark">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{wo.category}</li>
                <li className="list-group-item">{wo.muscleGroup}</li>
                <li className="list-group-item">{wo.equipment}</li>
              </ul>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

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
      {renderWorkouts()}
    </div>
  )
};
export default Search;
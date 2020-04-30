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
    .then(res => {
      dispatch({type: 'setworkouts', payload: res.data})
    })
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

  const styles = {
    margin: '5'
  }
  const renderWorkouts = () => {
    if(state.workoutsToRender){
      return(
        <div className='row'>
          {state.workoutsToRender.map(wo => 
            <div key={wo._id}className="card border-dark mb-3, col-4" style={styles}>
              <div className="card-header">{wo.name}</div>
              <div className="card-body text-dark">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Category: {wo.category}</li>
                  <li className="list-group-item">Muscles: {wo.muscleGroup}</li>
                  <li className="list-group-item">Equipment: {wo.equipment}</li>
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
        <div className='row'>
          <div className = 'col'>
            <label>Search by equipment</label>
            <input type='text' id='equip' onChange={handleChange} name='equipment-search'/>
          </div>
          <div className = 'col'>
            <label>Search by muscle group</label>
            <input type='text' onChange={handleChange} name='muscle-search'/>
          </div>
          <div className = 'col'>
            <label>Search by category</label>
            <input type='text'  onChange={handleChange}  name='category-search'/>
          </div>
        </div>
      </form>
      {renderWorkouts()}
    </div>
  )
};
export default Search;
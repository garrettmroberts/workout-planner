import React, { useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useStoreContext } from '../utils/GlobalState';
import DropDown from '../components/DropDown';
import API from '../utils/API';

function Search(){
  const [state, dispatch] = useStoreContext();

  let timeoutID; //ID to clear timeout if textfield changes
  const clickedWorkouts = []; //declare empty array to store clicked workouts

  //add Refs to be able manipulate user input fields
  const equipmentRef = useRef();
  const categoryRef = useRef();
  const muscleRef = useRef();

  //get user data from api and store to global context
  useEffect(()=>{
    getAllWorkouts();
    API.getLoggedInUser().then(res =>{
      const user = res.data;
      if(res.data) { dispatch({ type: 'setuser',user: user});}
    }).catch(err=> console.log(err));
  },[]);

  useEffect(()=> {
    console.log('HIT THE NEW ONE ');
  },[clickedWorkouts.length])
  //get all workouts in database
  const getAllWorkouts = () => {
    API.getWorkouts()
    .then(res => {
      dispatch({type: 'setworkouts', payload: res.data})
    })
    .catch(err => console.log(err));
  };
  
  const handleChange = (e) => {
    clearTimeout(timeoutID); //clear timeout if input changes
    const name = e.target.dataset.name;
    const value = e.target.dataset.key;
    debouncedSearch(name, value, 700); //send API search after 700 ms
  }

  const debouncedSearch = (name, value, interval) => {

    //set a timeout to wait the passed in interval to send API request
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

  const clickedWorkout = (wo)=>{
    clickedWorkouts.push(wo);
    console.log('clickedWorkouts ', clickedWorkouts);
    dispatch({type: 'addclickedworkout', payload: clickedWorkouts});
  }

  const renderWorkouts = () => {

    const workoutStyles = {
      justifyContent: 'space-evenly'
    }

    if(state.workoutsToRender){
      
      if(!state.clickedWorkouts){
        console.log('hit the if which is now default');
        return(
          <div className='row' style={workoutStyles}>
            {state.workoutsToRender.map((wo,i) => 
              <div key={wo._id}className="card border-dark mb-3 col-3" >
                <div className="card-header" onClick={()=>clickedWorkout(wo)}>{wo.name}</div>
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
        
      } else {
        console.log('hit the else which should now show user picks');
        console.log('STATE.CLICKEDWO ', state.clickedWorkouts)
        return(
          <div className='row' style ={workoutStyles}>
            <div className='col-9'>
            {state.workoutsToRender.map((wo,i) => 
                <div key={wo._id}className="card border-dark mb-3 col-3" >
                  <div className="card-header" onClick={()=>clickedWorkout(wo)}>{wo.name}</div>
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
            <div className='col-3'>
            {state.clickedWorkouts.map((wo,i) => 
                <div key={i}className="card border-dark mb-3 col-3" >
                  <div className="card-header">{wo.name} CLICKED</div>
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
          </div>
        );
        
      }
    }
  };

  const renderPage = () =>{
    if(!state.currentUser){
      return(
        <Redirect to='/'/>
      );
    }
    return(
      <form>
          <div className='row'>
            <div className = 'col'>
            <DropDown display="Filter by equipment" type="primary" keys={["barbell", "dumbbell", "exercise ball", "curl bar", "machine", "bicycle"]} name="equipment-search" func={handleChange} />
            </div>
            <div className = 'col'>
            <DropDown display="Filter by muscle group" type="primary" keys={["chest", "triceps", "shoulders", "forearms", "hamstrings", "quadriceps", "calves", "lats", "biceps", "middle back", "lower back", "traps"]} name="muscle-search" func={handleChange} />
            </div>
            <div className = 'col'>
            <DropDown display="Filter by category" type="primary" keys={["strength", "cardio"]} name="category-search" func={handleChange} />
            </div>
          </div>
        </form>
    );
  };

  return(
    <div className='wrapper'>
      {renderPage()}
      {renderWorkouts()}
    </div>
  )
};
export default Search;
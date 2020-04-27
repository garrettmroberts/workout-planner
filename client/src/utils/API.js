import axios from 'axios';

export default {
  // get all workouts
  getWorkouts: function(){
    return axios.get('/api/workouts');
  },
  // add user from login
  addUser: function(userData){
    return axios.post('/api/users', userData);
  },
  // get all users
  findAllUsers: function(){
    return axios.get('/api/users');
  },
  // create workout
  addWorkout: function(workoutData){
    return axios.post('/api/workouts', workoutData);
  },
  //login
  login: function(user){
    console.log('USER IN axios: ', user);
    return axios.post('/api/users/login', user)
  }
}
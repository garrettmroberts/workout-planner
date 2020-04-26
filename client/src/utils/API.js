import axios from 'axios';

export default {
  getWorkouts: function(){
    return axios.get('/api/workouts');
  },
  // add user from login
  addUser: function(userData){
    return axios.post('/api/users', userData);
  },
  findAllUsers: function(){
    return axios.get('/api/users');
  },
  addWorkout: function(workoutData){
    return axios.post('/api/workouts', workoutData);
  }
}
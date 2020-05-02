import axios from 'axios';

export default {
  // get all workouts
  getWorkouts: function(){
    return axios.get('/api/workouts');
  },
  regexSearch: function(query){
    return axios.get('/api/workouts/regex/'+ query);
  },
  //search for workouts by equipement
  findByEquipment: function(equipment){
    return axios.get('/api/workouts/equipment/'+ equipment);
  },
  //search for workouts by muscle
  findByMuscle: function(muscle){
    return axios.get('/api/workouts/musclegroup/' + muscle);
  },
  //search for workouts by category
  findByCategory: function(category){
    return axios.get('/api/workouts/category/' + category);
  },
  // add user from login
  addUser: function(userData){
    return axios.post('/api/users', userData);
  },
  // Updates a user
  updateUser: function(userData, id) {
    return axios.put(`/api/users/${id}`, userData);
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
    return axios.post('/api/users/login', user);
  },
  //logout
  logout: function(){
    return axios.post('/api/users/logout');
  },
  //getuser
  getLoggedInUser: function(){
    return axios.post('/api/users/getloggedinuser');
  }
}
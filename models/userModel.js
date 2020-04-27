const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    match: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    match: /[a-zA-Z0-9]{8,}/
  },
  firstName: {
    type: String,
    lowercase: true,
    required: true
  },
  lastName: {
    type: String,
    lowercase: true,
    required: true
  },
  goals: {
    type: Array,
    default: []
  },
  equipment: {
    type: Array,
    default: []
  },
  calendar: {
    type: Array,
    default: []
  }
})


//function called from passport to check password;
userSchema.methods.verifyPassword = function verifyPassword (pw) {
  console.log('THIS.MODEL ', this.model);
  if (this.model.password === pw){
    return true;
  } else {
    console.log('bad password');
    return false;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
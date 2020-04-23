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
    match: /[a-zA-Z0-9]{3,}/
  },
  firstName: {
    type: String,
    lowercase: true,
    required: true
  },
  lastName: {
    type: String,
    lowercae: true,
    required: true
  },
  goals: Array,
  equipment: Array,
  calendar: Array
})

const User = mongoose.model("User", userSchema);

module.exports = User;
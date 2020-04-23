const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  muscleGroup: {
    type: Array,
    required: true
  },
  equipment: {
    type: Array,
    default: []
  }
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  muscleGroups: {
    type: Array,
    required: true
  }
})

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;

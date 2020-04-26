const db = require("../models");

module.exports = {
  // Find all workouts
  findAll: function(req, res) {
    db.Workout.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Find workout by category
  findByCategory: function(req, res) {
    db.Workout.find({category: req.params.category})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Find Workout by ID
  findByID: function(req, res) {
    console.log("ID: ", req.params.id);
    db.Workout.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Find workout by available equipment
  findByEquipment: function(req, res) {
    db.Workout.find({equipment: req.params.equipment})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Finds workout by muscle group
  findByMuscleGroup: function (req, res) {
    db.Workout.find({ muscleGroup: req.params.muscle})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Add new workout
  addWorkout: function(req, res) {
    console.log('REQBODY: ' ,req.body);
    db.Workout.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Delete Workout
  deleteWorkout: function(req, res) {
    db.Workout.findByIdAndRemove(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Update a workout
  updateWorkout: function(req, res) {
    db.Workout.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }, 
      (err, result) => {
        if (err) return res.status(500).send(err);
      res.send(result);
    });
  }
};

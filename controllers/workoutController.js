const db = require("../models");

module.exports = {
  // Find all workouts
  findAll: function(req, res) {
    db.Workout.find()
      .then(dbModel => {
        console.log('DBMODEL: ', dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  // Find workout by category
  // The $regex and $options allow results to be returned if the database field
  // contains any of the search string, case insensitive
  findByCategory: function(req, res) {
    db.Workout.find({category: { '$regex':req.params.category, '$options': 'i' }})
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
  // The $regex and $options allow results to be returned if the database field
  // contains any of the search string, case insensitive
  findByEquipment: function(req, res) {
    db.Workout.find({equipment: { '$regex': req.params.equipment,'$options': 'i' }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Finds workout by muscle group
  // The $regex and $options allow results to be returned if the database field
  // contains any of the search string, case insensitive
  findByMuscleGroup: function (req, res) {
    db.Workout.find({ muscleGroup: { '$regex': req.params.muscle,'$options': 'i' }})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Add new workout
  addWorkout: function(req, res) {
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

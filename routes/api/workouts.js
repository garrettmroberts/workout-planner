const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

// Matches with /api/workouts
router
  .route("/")
  .get(workoutController.findAll)
  .post(workoutController.addWorkout)

// Matches with /api/workouts/category/:category
router
  .route("/category/:category")
  .get(workoutController.findByCategory)

// Matches with /api/workouts/id/:id
router
  .route("/id/:id")
  .get(workoutController.findByID)
  .delete(workoutController.deleteWorkout)
  .put(workoutController.updateWorkout)

// Matches with /api/workouts/equipment/:equipment
router
  .route("/equipment/:equipment")
  .get(workoutController.findByEquipment)

router
  .route("/muscleGroup/:muscle")
  .get(workoutController.findByMuscleGroup)

module.exports = router;
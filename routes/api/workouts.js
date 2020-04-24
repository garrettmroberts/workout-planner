const router = require("express").Router();
const workoutController = require("../../controllers/workoutController");

// Matches with /api/workouts/:id
router
.route("/:id")
.get(workoutController.findByID)
.delete(workoutController.deleteWorkout)
.put(workoutController.updateWorkout)

// Matches with /api/workouts/category/:category
router
.route("/category/:category")
.get(workoutController.findByCategory)

// Matches with /api/workouts/equipment/:equipment
router
.route("/equipment/:equipment")
.get(workoutController.findByEquipment)

router
.route("/musclegroup/:muscle")
.get(workoutController.findByMuscleGroup)

// Matches with /api/workouts
router
  .route("/")
  .get(workoutController.findAll)
  .post(workoutController.addWorkout)
  
module.exports = router;
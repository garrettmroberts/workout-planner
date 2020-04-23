const router = require("express").Router();
const userRoutes = require("./users");
const workoutRoutes = require("./workouts");

router.use("/users", userRoutes);
router.use("/workouts", workoutRoutes);

module.exports = router;
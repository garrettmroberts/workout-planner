const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with /api/users
router
  .route("/")
  .get(userController.findAll)
  .post(userController.addUser);

// Matches with /api/users/:id
router
  .route("/:id")
  .get(userController.findByID)
  .put(userController.updateUser)
  .delete(userController.deleteUser);



module.exports = router;
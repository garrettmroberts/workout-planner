const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with /api/users
router
  .route("/")
  .get(userController.findAll)
  .post(userController.addUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

// Matches with /api/users/:id
router
  .route("/:id")
  .get(userController.findByID);



module.exports = router;
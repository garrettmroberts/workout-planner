const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require('../../scripts/passport');

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

//Test route for passport authentication
router
  .route('/login')
  .post(passport.authenticate('local'), (req, res) => {
      console.log('REQ.USER: ', req.user);
      res.json(req.user);
    });
  
module.exports = router;
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

//route for passport authentication
router
  .route('/login')
  .post(passport.authenticate('local'), (req, res) => {
      res.json(req.user);
    });
//logout route for passport
router
    .route('/logout')
    .post((req,res)=> {
      req.logout();
      res.json({message: 'you logged out'});
    })

//route to check users login status
router
    .route('/getloggedinuser')
    .post((req,res)=>{
      if(req.user){
        return res.json(req.user);
      }
      return res.json(null);
    });
  
module.exports = router;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");


passport.use(new LocalStrategy(
  {usernameField: 'email', passReqToCallback: 'password'},
  function(req, email, password, done) { // <=== had to add req parameter in function parameters  
    console.log('email ', email);        // - wasn't recognizing done as a function
    console.log('done: ', done);
    db.User.findOne({email: email}, (err, user) => {
      console.log('USER', user);
      if (err) { return done(err); }
      if (!user) { return done(null, false) }
      //TODO: I made a method in the user schema but couldn't figure out how
      //to read the password for the user by calling the method from a specific user
      //Also would like to add an encryption step when creating users
      if (!user.password === password) {return done(null, false); } //not using DB METHOD
      return done(null, user)
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findOne({_id: id})
    .then(done(null, result));
});

module.exports = passport;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");


passport.use(new LocalStrategy(
  {usernameField: 'email', passReqToCallback: 'password'},
  function(unused, email, password, done) { // <=== had to add unused parameter in function parameters  
    console.log('email ', email);        // - wasn't recognizing done as a function
    console.log('done: ', done);
    db.User.findOne({email: email}, (err, user) => {
      console.log('USER', user);
      if (err) { return done(err); }
      if (!user) { return done(null, false) }
      //Also would like to add an encryption step when creating users
      if (!user.verifyPassword(password)) {return done(null, false); } 
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
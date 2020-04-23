const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");


passport.use(new LocalStrategy(
  function(email, password, done) {
    db.User.findOne({email: email}, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false) }
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
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var models = require("../models");

passport.use(
  "local",
  new LocalStrategy(function (username, password, done) {
    models.users
      .findOne({
        where: { Username: username },
      })
      .then(user => {
        if (!user) {
          return done(null, false, { message: "incorrect username" });
        }
        if (user.Password !== password) {
          return done(null, false, { message: "incorrect password" });
        }
        return done(null, user);
      })
      .catch(err => {
        if (err) {
          return done(err);
        }
      });
  })
);

passport.use(
  "admin",
  new LocalStrategy(function (username, password, done) {
    models.users
      .findOne({
        where: { 
          Username: username,
          Admin: admin = true
         },
      })
      .then(user => {
        if (!user) {
          return done(null, false, { message: "incorrect username" });
        }
        if (user.Password !== password) {
          return done(null, false, { message: "incorrect password" });
        }
        return done(null, user);
      })
      .catch(err => {
        if (err) {
          return done(err);
        }
      });
  })
);

passport.serializeUser((user, callback) => {
  callback(null, user.UserId);
});

passport.deserializeUser((id, callback) => {
  models.users
    .findByPk(id)
    .then(user => callback(null, user))
    .catch(err => callback(err));
});

module.exports = passport;

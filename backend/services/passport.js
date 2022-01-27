const passport = require('passport');
const mongoose = require('mongoose');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = mongoose.model('users');

const keys = require('../config/keys');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        done(null, existingUser);
      }
      else {
        new User({ googleId: profile.id }).save()
          .then(user => done(null, user));
      }
    });
})
);

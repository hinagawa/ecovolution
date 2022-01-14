const passport = require('passport');
const config = require('config');
const mongoose = require('mongoose');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const { JwtStrategy, ExtractJwt } = require('passport-jwt');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

// passport.use(new JwtStrategy({
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: config.get('jwt_secret'),
// }, function (jwt_paylaod, done) {
// }))

passport.use(new GoogleStrategy({
  clientID: config.get('googleClientID'),
  clientSecret: config.get('googleClientSecret'),
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

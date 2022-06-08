const { signUp, signIn, forgotPassword, resetPassword } = require('../controllers/authController');
const passport = require('passport');

module.exports = (app) => {
  app.route('/api/auth/google').get(passport.authenticate('google', {
    scope: ['profile', 'email']
  })
  );

  app.route('/api/logout').get((req) => {
    req.logout();
  });

  app.get('/api/auth/google/callback', passport.authenticate( 'google', {
    successRedirect: '/articles',
    failureRedirect: '/auth/sign-in'
 }));
  app.route('/api/sign-up').post(signUp);
  app.route('/api/sign-in').post(signIn);
  app.route('/api/forgot-password').post(forgotPassword);
  app.route('/api/reset-password').post(resetPassword);
};

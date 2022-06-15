const { signUp, signIn, forgotPassword, resetPassword } = require('../controllers/authController');
const passport = require('passport');

module.exports = (app) => {

  app.route('/api/logout').get((req) => {
    req.logout();
  });

  app.get('auth/google/callback', passport.authenticate( 'google', {
    successRedirect: '/articles',
    failureRedirect: '/auth/sign-in'
 }));
 app.get('/api/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
));
  app.route('/api/sign-up').post(signUp);
  app.route('/api/sign-in').post(signIn);
  app.route('/api/forgot-password').post(forgotPassword);
  app.route('/api/reset-password').post(resetPassword);
};

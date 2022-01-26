const { signUp, signIn, forgotPassword, resetPassword } = require('../controllers/authController');
const passport = require('passport');

module.exports = (app) => {
  app.route('/auth/google').get(passport.authenticate('google', {
    scope: ['profile', 'email']
  })
  );

  app.route('/api/logout').get((req) => {
    req.logout();
  });

  app.route('/auth/google/callback').get((req, res) => {
    res.redirect('/api/current_user');
  });

  app.route('/api/current_user').get((req, res) => {
    res.send(req.session);
  });

  app.route('/api/sign-up').post(signUp);
  app.route('/api/sign-in').post(signIn);
  app.route('/api/forgot-password').post(forgotPassword);
  app.route('/api/reset-password').post(resetPassword);
};
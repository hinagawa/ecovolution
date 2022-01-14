const passport = require('passport');
const bcrypt = require('bcrypt');
const config = require('config');
const User = require('../models/User');

const SALT = config.get('salt');
module.exports = (router) => {
  router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
  );

  router.get('/api/logout', (req) => {
    req.logout();
  });

  router.get('/auth/google/callback', (req, res) => {
    res.redirect('/api/current_user');
  });

  router.get('/api/current_user', (req, res) => {
    res.send(req.session);
  });

  router.post('/sign-up', async (req, res) => {
    try {
      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) return res.status(400).json({ message: 'User with this email already exist' });
      const hashedPassword = await bcrypt.hash(password, SALT);
      const user = new User({ email, password: hashedPassword });
      await user.save();
      res.status.json({ message: 'User has been created' });
    }
    catch (e) {
      res.status(500).json({ message: 'Somethig went wrong' });
    }
  });

  router.post('/sign-in', async (req, res) => {

  });

};

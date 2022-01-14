const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');

const API_PORT = process.env.API_PORT || 5000;

mongoose.connect(keys.mongoURI);

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

app.listen(API_PORT, () => console.log(`The server is running on port ${API_PORT}`));

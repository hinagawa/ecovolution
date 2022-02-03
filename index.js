const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDocument = require('./swagger/basicInfo');

const keys = require('./config/keys');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

require('./models/User');
require('./services/passport');

const PORT = keys.port || 5000;
const spec = swaggerJsdoc(swaggerDocument);

async function start() {
    try {
        await mongoose.connect(keys.mongoURI);
    }
    catch (e) {
        console.log('Mongo error', e.message);
        process.exit(1);
    }
}

start();

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: keys.cookieKey
    })
);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
    });
}

app.use(passport.initialize());
app.use(passport.session());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(spec));

authRoutes(app);
userRoutes(app);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
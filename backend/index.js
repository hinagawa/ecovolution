const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const config = require('./config/dev');

const swaggerDocument = require('./swagger/basicInfo');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

require('./models/User');
require('./services/passport');

const PORT = config.port || 5000;

const spec = swaggerJsdoc(swaggerDocument);

async function start() {
    try {
        await mongoose.connect(config.mongoURI);
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
        keys: [config.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(spec));

authRoutes(app);
userRoutes(app);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
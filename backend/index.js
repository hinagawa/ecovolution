const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

app.listen(5000, () => console.log('The server is running on localhost:5000'));
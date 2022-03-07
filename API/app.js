const express = require('express');
const cors = require('cors');

const app = express();
const loginRouter = require('./routes/loginRoutes');
const signupRouter = require('./routes/signupRoutes');

module.exports = app;

app.use(express.json());

app.use(cors({ origin: '*' }));

app.use('/api/v1/signup', signupRouter);
app.use('/api/v1/login', loginRouter);

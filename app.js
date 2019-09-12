const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const {notFound, errorHandler} = require('./lib/errors');

const app = express();

require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());

// mongoDB connection
require('./database');

// CORS
app.use(cors());

// player routes
app.use('/v1/api/player', require('./routes/player.routes'));

// clan routes
app.use('/v1/api/clan', require('./routes/clan.routes'));

// catch 404 and forward to error handler
app.use(notFound);
// error handler
app.use(errorHandler);

module.exports = app;

const express = require('express');
const path = require('path');

const notes = require('./notes');

const app = express();

//currently at '/api'
app.use('/notes', notes);

module.exports = app;
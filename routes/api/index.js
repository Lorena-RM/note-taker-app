const express = require('express');
const path = require('path');

const notes = require('./notes');

const router = express();

//currently at '/api'
router.use('/notes', notes);

module.exports = router;
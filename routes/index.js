const express = require('express')
const router = express();
const path = require('path');

const api = require('./api')

//root rout
//currently at '/'
router.use('/api', api);

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = router
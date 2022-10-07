const express = require('express')
const router = express();
const path = require('path');

const api = require('./apiRoutes')

//root rout
//currently at '/'

router.use('/api', api);

router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

router.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router
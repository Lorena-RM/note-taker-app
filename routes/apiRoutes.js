const express = require("express");
const store = require("../db/store");

const router = express();

//currently at '/api'
router.get("/notes", (req, res) => {
  store.getNotes().then((notes) => {
    return res.json(notes);
  }).catch(err=>{
    return res.status(500).json(err)
  })
});

module.exports = router;

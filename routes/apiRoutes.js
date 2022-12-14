const express = require("express");
const store = require("../db/store");

const router = express();

//currently at '/api'
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});

router.post("/notes", (req, res) => {
  store
    .writeNote(req.body)
    .then((note) => {
      return res.json(note);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
});

router.delete("/notes/:id", (req, res) => {
    store.deleteNote(req.params.id).then(()=>{
        return res.json({"gone": "Your note has been Deleted"})
    }).catch((err)=> {
        return res.status(404).json(err);
    })
})

module.exports = router;

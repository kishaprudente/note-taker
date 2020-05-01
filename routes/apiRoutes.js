const path = require("path");
const router = require("express").Router();
const DbFunction = require("../db/dbFunctions");

const dbFunc = new DbFunction();
const { readNotes, addNotes, getNotes, addNote } = dbFunc;

router.get("/api/notes", (req, res) => {
  res.getNotes();
});

router.post("/api/notes", (req, res) => {});

router.delete("/api/notes", (req, res) => {});

module.exports = router;

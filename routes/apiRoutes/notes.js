const router = require('express').Router();
const fs = require('fs');
const notes = require("../../db/db.json");
const uuid = require('../../helpers/uuid');

router.get('/notes', (req, res) =>
{
  res.json(notes);
});

router.post('/notes', (req, res) =>
{
  const newNote = req.body;
  newNote.id = uuid();

  fs.readFile('./db/db.json', 'utf-8', (err) =>
  {
    if(err)
    {
      console.log(err);
    }
    else{
      notes.push(newNote);
      fs.writeFile('./db/db.json', JSON.stringify(notes, null, 4), (writeErr) =>
      {
        writeErr ? console.log(writeErr) : console.info('Successfully added new note!');
      });
    }
    res.json(notes);
  });
});

router.delete('/notes/:id', (req, res) =>
{
  //splice note from array in db fs.readfile then remove item then fs.writefile
  let noteId = req.params.id.toString();

  console.log(noteId);

  fs.readFile('./db/db.json', 'utf-8', (err) =>
  {
    if(err)
    {
      console.log(err);
    }
    notes.splice(noteId -1);
    fs.writeFile('./db/db.json', JSON.stringify(notes, null, 4), (writeErr) =>
    {
      writeErr ? console.log(writeErr) : console.info('Successfully deleted note!');
    });
    res.json(notes);
  });
});

module.exports = router;
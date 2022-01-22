const router = require('express').Router();
const { note } = require('../../db/db.json');

router.get('/notes', (req, res) =>
{
  //grab the array of notes
});

router.get('/notes/:id', (req, res) =>
{
  //grab the array of notes
});

router.post('/notes', (req, res) =>
{
  //append note to array in db
});

router.delete('/notes/:id', (req, res) =>
{
  //splice note from array in db
});

module.exports = router;
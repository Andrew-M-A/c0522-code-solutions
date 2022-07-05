const express = require('express');
const app = express();
const data = require('./data.json');

app.listen(3000, () => {
  // console.log('listening on port 3 stacks!');
});

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (var key in data.notes) {
    if (data.notes[key] === undefined) {
      res.send('There are no entries!');
      return notes;
    } else {
      notes.push(data.notes[key]);
    }
  }
  res.status(200).json(notes);
});

app.use(express());

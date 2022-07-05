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

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const error = {};
  if (id < 0) {
    error.error = 'invalid entry... ID must be a positive number';
    res.status(400).json(error);
  } else if (data.notes[id] === undefined) {
    error.error = `entry ${id} doesn't exist`;
    res.status(404).json(error);
  } else {
    res.send(data.notes[id]);
  }
}
);

app.use(express());

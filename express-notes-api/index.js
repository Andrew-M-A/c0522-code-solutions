const express = require('express');
const app = express();
const data = require('./data.json');
const fs = require('fs');

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

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const error = {};
  const entry = req.body;
  if (entry.content === undefined) {
    error.error = 'content is a required field';
    res.status(400).json(error);
  } else {
    const entry = req.body;
    entry.id = data.nextId;
    data.notes[data.nextId] = entry;
    data.nextId++;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData + '\n', 'utf8', err => {
      error.error = 'An unexpected error occured.';
      if (err) {
        console.error(err);
        res.status(500).json(error);
      } else {
        res.status(201).json(entry);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const error = {};
  if (id < 0) {
    error.error = 'invalid entry... ID must be a positive number';
    res.status(400).json(error);
  } else if (data.notes[id] === undefined) {
    error.error = `entry ${id} doesn't exist`;
    res.status(404).json(error);
  } else {
    delete data.notes[id];
    res.status(204).json();
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData + '\n', 'utf8', err => {
      error.error = 'An unexpected error occured.';
      if (err) {
        console.error(err);
        res.status(500).json(error);
      } else {
        res.status(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  const entry = req.body;
  const error = {};
  if (id < 0 || entry.content === undefined) {
    error.error = 'invalid entry... ID must be a positive number or content property was omitted';
    res.status(400).json(error);
  } else if (data.notes[id] === undefined) {
    error.error = `entry ${id} doesn't exist`;
    res.status(404).json(error);
  } else {
    data.notes[id] = entry;
    data.notes[id].id = id;
    const newData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newData + '\n', 'utf8', err => {
      error.error = 'An unexpected error occured.';
      if (err) {
        console.error(err);
        res.status(500).json(error);
      } else {
        res.status(200).json(data.notes[id]);
      }
    });
  }
});

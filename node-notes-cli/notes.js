const fs = require('fs');
const jsonDerulo = require('./data.json');

const command = process.argv[2];
const action = process.argv[3];
const updateText = process.argv[4];
const notes = jsonDerulo.notes;

if (command === 'read') {
  for (var property in notes) {
    console.log(property + ': ' + notes[property]);
  }
}

if (command === 'create') {
  jsonDerulo.notes[jsonDerulo.nextId] = action;
  jsonDerulo.nextId++;
}

if (command === 'delete') {
  delete jsonDerulo.notes[action];
}

if (command === 'update') {
  jsonDerulo.notes[action] = updateText;
}

const updates = JSON.stringify(jsonDerulo, null, 2);

fs.writeFile('data.json', updates + '\n', 'utf8', err => {
  if (err) throw err;
});

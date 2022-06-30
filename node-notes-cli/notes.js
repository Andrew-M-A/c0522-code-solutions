const fs = require('fs');
const jsonDerulo = require('./data.json');

const command = process.argv[2];
const action = process.argv[3];
const updateText = process.argv[4];

if (command === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(jsonDerulo.notes);
  });
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

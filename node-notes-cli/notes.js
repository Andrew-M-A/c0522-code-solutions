const fs = require('fs');
const jsonDerulo = require('./data.json');

const command = process.argv[2];

if (command === 'read') {
  console.log(jsonDerulo.notes);
}

if (command === 'create') {
  jsonDerulo.notes[jsonDerulo.nextId] = process.argv[3];
  jsonDerulo.nextId++;
}

const updates = JSON.stringify(jsonDerulo, null, 2);

fs.writeFile('data.json', updates, 'utf8', err => {
  if (err) throw err;
});

console.log(jsonDerulo);

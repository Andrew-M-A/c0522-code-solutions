const fs = require('fs');
let cat;

for (var i = 2; i < process.argv.length; i++) {
  cat = process.argv[i];
  fs.readFile(cat, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

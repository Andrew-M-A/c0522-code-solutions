const express = require('express');
const path = require('path');

const app = express();

const combine = path.join(__dirname, 'public');
console.log(combine);

const serve = express.static(combine);
app.use(serve);

app.listen(3000, () => {
  console.log('listening on port 3000!');
});

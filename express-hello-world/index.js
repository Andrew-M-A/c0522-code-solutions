const express = require('express');

const app = express();

app.use((req, res) => {
  res.send('is this working?');
});

app.listen(3000, () => {
});

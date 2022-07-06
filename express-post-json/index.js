const express = require('express');
const app = express();
let nextID = 1;
const grades = {};

app.listen(3000, () => {
  // console.log('Listening on port 3 STACKS!');
});

app.get('/api/grades', (req, res) => {
  const studentGrades = [];
  for (const property in grades) {
    studentGrades.push(grades[property]);
  }
  res.json(studentGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextID;
  grades[nextID] = grade;
  nextID++;
  res.status(201).send(grade);
});

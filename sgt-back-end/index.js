const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // console.log('listening on port 3000');
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"`;
  db.query(sql)
    .then(result => {
      let grades = [];
      grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  if (grade.name === undefined) {
    res.status(400).json({
      error: 'invalid grade... "name" is required'
    });

  } else if (grade.course === undefined) {
    res.status(400).json({
      error: 'invalid grade... "course" is required'
    });

  } else if (grade.score === undefined) {
    res.status(400).json({
      error: 'invalid grade... "score" is required'
    });

  } else if (!Number.isInteger(grade.score) || grade.score > 100) {
    res.status(400).json({
      error: 'invalid entry... "score" must be between 0 and 100'
    });
  } else {
    const gradeEntry = [grade.name, grade.course, grade.score];
    const sql = `insert into "grades" ("name", "course", "score")
               values ($1, $2, $3)
               returning *`;
    db.query(sql, gradeEntry)
      .then(result => {
        res.status(201).json(result.rows[0]);
      }
      )
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const grade = req.body;
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
  } else if (grade.name === undefined) {
    res.status(400).json({
      error: 'invalid entry... "name" is required'
    });

  } else if (grade.course === undefined) {
    res.status(400).json({
      error: 'invalid entry... "course" is required'
    });

  } else if (grade.score === undefined) {
    res.status.json({
      error: 'invalid entry... "score" is required'
    });
  } else if (!Number.isInteger(grade.score) || grade.score > 100) {
    res.status(400).json({
      error: 'invalid entry... "score" must be between 0 and 100'
    });
  } else {
    const gradeUpdate = [grade.name, grade.course, grade.score, gradeId];
    const sql = `
    update "grades"
      set  "name"    = $1,
           "course"  = $2,
           "score"   = $3
     where "gradeId" = $4
     returning *`;
    db.query(sql, gradeUpdate)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with gradeId: ${gradeId}`
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });

  } else {
    const sql = `
            delete from "grades"
            where "gradeId" = $1
            returning *`;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with gradeId: ${gradeId}`
          });
        } else {
          res.status(204).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      });
  }
});

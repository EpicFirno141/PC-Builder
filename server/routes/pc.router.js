const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `SELECT pc.id, pc.name, pc.color, status.name AS status FROM pc 
    JOIN status ON pc.status_id = status.id WHERE pc.user_id = $1;`;
    pool.query(queryText, [req.user.id]).then((response) => {
        res.send(response.rows);
    }).catch((err) => {
        console.log('Get PC failed: ', err);
        res.sendStatus(500);
    });
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT pc.id, pc.name, pc.color, status.name AS status, pc.user_id FROM pc 
  JOIN status ON pc.status_id = status.id WHERE pc.id = $1;`;
  pool.query(queryText, [req.params.id]).then((response) => {
    console.log(response.rows);
    if(response.rows[0].user_id === req.user.id){
      res.send(response.rows);
    } else {
      res.sendStatus(403);
    }
  }).catch((err) => {
      console.log('Get PC failed: ', err);
      res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    const queryText = `INSERT INTO "pc" (name, status_id, color, user_id)
    VALUES ('New PC', 2, 'blue[500]', $1)`;
  pool
    .query(queryText, [req.user.id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Add PC failed: ', err);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM pc WHERE id = $1`;
  pool.query(queryText, [req.params.id]).then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('Delete PC failed: ' + error);
    res.sendStatus(500);
  });
})

module.exports = router;

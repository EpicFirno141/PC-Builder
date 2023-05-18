const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const queryText = `SELECT pc.id, pc.name, pc.color, status.name AS status FROM pc 
    JOIN status ON pc.status_id = status.id WHERE pc.user_id = $1;`;
    pool.query(queryText, [req.user.id]).then((response) => {
        res.send(response.data);
    }).catch((err) => {
        console.log('Get PC failed: ', err);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "pc" (name, status_id, color, user_id)
    VALUES ('New PC', 2, 'white', $1)`;
  pool
    .query(queryText, [req.user.id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Add PC failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
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

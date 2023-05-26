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
    // So this is the most complex postgres query I've ever made...
    // What it does is return rows (one per pc id) that are associated with a user_id
    // If there is a pc case (with an image) that is related to the pc through the many-to-many table
    // it will set image as that. Otherwise, it sets the image as a generic pc case.
    // (Of course there is some other information being returned, but this whole conditional return/one per pc id
    // had me going on this one for a while)
    const queryText = `SELECT DISTINCT ON (pc.id) pc.id, pc.name, pc.color, status.name AS status, 
    CASE WHEN component.component_type_id = 8 THEN component.image
    ELSE 'https://c1.neweggimages.com/ProductImage/2AM-000T-001M3-76.jpg' 
    END AS image FROM pc
    JOIN status ON pc.status_id = status.id 
    LEFT JOIN pc_component ON pc.id = pc_component.pc_id
    LEFT JOIN component ON pc_component.component_id = component.id 
    WHERE pc.user_id = $1 ORDER BY pc.id, component.component_type_id DESC;`;
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
    VALUES ('New PC', 2, 'text.primary', $1)`;
  pool
    .query(queryText, [req.user.id])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Add PC failed: ', err);
      res.sendStatus(500);
    });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM pc_component WHERE pc_id = $1;`;
  pool.query(queryText, [req.params.id]).then((result) => {
    // Since we have a many-to-many table as well we need to remove all rows related to the now deleted table
    const nextQueryText = `DELETE FROM pc WHERE id = $1;`;
    pool.query(nextQueryText, [req.params.id]).then((result) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log('Second Delete PC query failed: ' + error);
      res.sendStatus(500);
    });
  }).catch((error) => {
    console.log('First Delete PC query failed: ' + error);
    res.sendStatus(500);
  });
})

module.exports = router;

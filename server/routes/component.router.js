const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

router.get('/pc/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT component.id, pc.user_id, component.name, component.image, component.price,
  component.money_spent, component_type.type, component.subtype, component.specs, 
  component.compatibility, component.speed, component.efficiency, component.wattage  
  FROM pc_component JOIN pc ON pc_component.pc_id = pc.id 
  JOIN component ON pc_component.component_id = component.id 
  JOIN component_type ON component.component_type_id = component_type.id 
  WHERE pc.id = $1;`;
  pool.query(queryText, [req.params.id]).then((response) => {
    console.log(response.rows);
    if(response.rows[0].user_id === req.user.id){
      res.send(response.rows);
    } else {
      res.sendStatus(403);
    }
  }).catch((err) => {
      console.log('Get PC components list failed: ', err);
      res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
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
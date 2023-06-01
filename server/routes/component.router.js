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
    // Three conditions: 1 - There are no components for PC
    // 2 - There are components for PC & user matches in database
    // 3 - There are components for PC & user DOES NOT match in database
    if(response.rows.length === 0){
      console.log('There are no components');
      res.send([]);
    } else if(response.rows[0].user_id === req.user.id){
      res.send(response.rows);
    } else {
      res.sendStatus(403);
    }
  }).catch((err) => {
      console.log('Get PC components list failed: ', err);
      res.sendStatus(500);
  });
});

router.get('/gpu', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT component.id, component.name, component.image, component.price,
  component.money_spent, component_type.type, component.subtype, component.specs, 
  component.compatibility, component.speed, component.efficiency, component.wattage  
  FROM component 
  JOIN component_type ON component.component_type_id = component_type.id 
  WHERE component_type.type = 'gpu';`;
  pool.query(queryText).then((response) => {
    res.send(response.rows);
  }).catch((err) => {
      console.log('Get GPU components list failed: ', err);
      res.sendStatus(500);
  });
});

router.get('/cpu', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT component.id, component.name, component.image, component.price,
  component.money_spent, component_type.type, component.subtype, component.specs, 
  component.compatibility, component.speed, component.efficiency, component.wattage  
  FROM component 
  JOIN component_type ON component.component_type_id = component_type.id 
  WHERE component_type.type = 'cpu';`;
  pool.query(queryText).then((response) => {
    res.send(response.rows);
  }).catch((err) => {
      console.log('Get CPU components list failed: ', err);
      res.sendStatus(500);
  });
});

router.post('/', rejectUnauthenticated, (req, res) => {
  const queryText = `INSERT INTO pc_component (pc_id, component_id) VALUES ($1, $2);`;
  pool.query(queryText, [req.body.pc, req.body.component]).then((response) => {
    res.sendStatus(201);
  }).catch((err) => {
      console.log('POST to pc_component failed: ', err);
      res.sendStatus(500);
  });
});

router.delete('/', rejectUnauthenticated, (req, res) => {
  const queryText = `DELETE FROM pc_component WHERE pc_id = $1 AND component_id = $2;`;
  pool.query(queryText, [req.body.pc, req.body.component]).then((response) => {
    res.sendStatus(201);
  }).catch((err) => {
      console.log('DELETE from pc_component failed: ', err);
      res.sendStatus(500);
  });
});

module.exports = router;
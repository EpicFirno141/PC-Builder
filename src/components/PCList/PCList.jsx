import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import PCItem from './PCItem';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';

function PCList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const pcList = useSelector(store => store.pcList);

  const addPC = () => {
    dispatch({ type: 'ADD_PC' });
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_PC_LIST' });
  }, []);

  return (
    <div className="container">
      <Fab color="secondary" onClick={addPC}
        sx={{ margin: 0, position: 'absolute', bottom: 32, right: 32}}
      >
        <AddIcon />
      </Fab>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          pcList.length === 0 && 
            <Paper sx={{ m: 'auto', mt: 4, px: 2, py: 1}}>
              <Typography variant='h6' color='red.main' sx={{ fontWeight: 'bold' }}>
                No PC found - Click the '+' to make one!
              </Typography>
            </Paper>
        }
        {pcList.map((pc, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <PCItem pc={pc} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PCList;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import PCItem from './PCItem';
import { useDispatch, useSelector } from 'react-redux';

function PCList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const pcList = useSelector(store => store.pcList)

  const addPC = () => {
    dispatch({ type: 'ADD_PC' });
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_PC_LIST' });
  }, []);

  return (
    <div className="container">
      <Button variant="contained"
        endIcon={<AddIcon />} 
        color="secondary" 
        onClick={addPC}
        sx={{ margin: 0,
          top: 'auto',
          right: 20,
          bottom: 'auto',
          left: 'auto',
          position: 'fixed',
          padding: 1.3,
        }}
      >Add PC</Button>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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

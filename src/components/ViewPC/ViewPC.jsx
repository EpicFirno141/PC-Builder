import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ViewPC() {
  const params = useParams();
  const dispatch = useDispatch();
  const pcItem = useSelector(store => store.pcItem);

  useEffect(() => {
    dispatch({ type: 'FETCH_PC_VIEW', payload: { id: params.id } });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Paper>{pcItem.name}</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper></Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
}

export default ViewPC;

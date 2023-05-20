import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ViewPC() {
  const params = useParams();
  const dispatch = useDispatch();
  const pcItem = useSelector(store => store.pcItem);
  const pc = pcItem[0];

  useEffect(() => {
    dispatch({ type: 'FETCH_PC_ITEM', payload: { id: params.id } });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <CardContent>
            <Typography>{pc.name}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>

      </Grid>
      <Grid item xs={4}>

      </Grid>
    </Grid>
  );
}

export default ViewPC;

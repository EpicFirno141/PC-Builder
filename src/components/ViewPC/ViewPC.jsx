import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { blue } from '@mui/material/colors';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentList from './ComponentList';

function ViewPC() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const pcItem = useSelector(store => store.pcItem);

  const deletePC = () => {
    dispatch({ type: 'REMOVE_PC', payload: { id: params.id } });
    history.push('/');
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_PC_ITEM', payload: { id: params.id } });
    dispatch({ type: 'FETCH_COMPONENT_LIST', payload: { id: params.id } });
  }, []);

  return (
    <Grid container spacing={0}>
      <Grid item xs={3}>
        <Card sx={{ m: 2 }}>
          <CardMedia 
            component="img"
            height="300"
            image="https://c1.neweggimages.com/ProductImage/2AM-000T-001M3-76.jpg"/>
        </Card>
        <Card sx={{ m: 2 }}>
          <CardContent>
            <Grid container spacing={2} direction='column' justifyContent='space-evenly' alignItems='flex-start'>
              <Grid item xs={8}>
                <Typography sx={{ m: 'auto' }}><b>Name:</b> {pcItem.name}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ m: 'auto' }}><b>Status:</b> {pcItem.status}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ m: 'auto' }}><b>Color:</b> <CircleIcon sx={{ color: pcItem.color }} /> </Typography>
              </Grid>
            </Grid>  
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <ComponentList />
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ m: 2, p: 1 }}>
            <CardActions>
              <Grid container spacing={2} direction='column' justifyContent='center' alignItems='center'>
                <Grid item xs={8}>
                  <Button variant='contained' sx={{ }}>Edit</Button>
                </Grid>
                <Grid item xs={8}>
                  <Button variant='contained' onClick={deletePC}>Delete</Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
      </Grid>
    </Grid>
  );
}

export default ViewPC;

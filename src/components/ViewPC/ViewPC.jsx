import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
import myPCImage from '../../images/myPC.jpg';

function ViewPC() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const pcItem = useSelector(store => store.pcItem);
  const componentList = useSelector(store => store.componentList);
  const pcPrice = useSelector(store => store.pcPrice);
  const pcWattage = useSelector(store => store.pcWattage);

  const details = () => {
    history.push(`/details/${pcItem.id}`);
}

  const deletePC = () => {
    dispatch({ type: 'REMOVE_PC', payload: { id: params.id } });
    history.push('/');
  }

  const goBack = () => {
    history.push('/list');
  }
  
  return (
    <Grid container spacing={0}>
      <Grid item xs={3}>
        <Card sx={{ m: 2 }}>
          {
            pcItem.name === 'My PC' ?
              <CardMedia 
              component="img"
              height="300"
              image={myPCImage} /> 
                :
              <CardMedia 
              component="img"
              height="300"
              image={pcItem.image} />
          }
          
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
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ m: 'auto' }}><b>Color:</b> <CircleIcon color={pcItem.color} /> </Typography>
                </Box>
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
                  <Button variant='contained' onClick={details}>Change Details</Button>
                </Grid>
                <Grid item xs={8}>
                  <Button variant='contained' onClick={deletePC}>Delete</Button>
                </Grid>
                <Grid item xs={8}>
                  <Button variant='contained' onClick={goBack}>Back</Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
          <Card sx={{ m: 2, p: 1 }}>
            <CardContent>
                {
                  componentList.length === 0 ? 
                    <Box>
                      <Typography><b>Total Price:</b>  $0</Typography>
                      <br />
                      <Typography><b>Max Wattage:</b> 0 W</Typography>
                    </Box> :
                    <Box>
                      <Typography><b>Total Price:</b>  ${pcPrice.price}</Typography>
                      <br />
                      <Typography><b>Max Wattage:</b> {pcWattage.wattage} W</Typography>
                    </Box>
                }

            </CardContent>
          </Card>
      </Grid>
    </Grid>
  );
}

export default ViewPC;

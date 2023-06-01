import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function LoginPage() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; 

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Card item sx={{ minWidth: 340, m: 5}}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 1 }}>
            Sign In
          </Typography>
          {errors.registrationMessage && (
            <Typography variant='h7' sx={{ mb: 2 }}>
              {errors.registrationMessage}
              <br />
            </Typography>
            
          )}
          <TextField
            id="outlined-helperText"
            label="Username"
            defaultValue=""
            sx={{ m: 1, width: '30ch' }}
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <TextField
            id="outlined-helperText"
            label="Password"
            defaultValue=""
            sx={{ mt: 1, mr: 1, ml: 1, width: '30ch' }}
            value={password}
            required
            type='password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </CardContent>
        <CardActions>
          <Button size="medium" variant="contained" sx={{ mr: 1, mb: 1, ml: 1 }} onClick={login}>Login</Button>
          <Button size="medium" variant="contained" sx={{ mr: 1, mb: 1 }} onClick={registerUser}>Register</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default LoginPage;

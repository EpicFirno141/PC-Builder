import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Profile() {
  const dispatch = useDispatch();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <Container sx={{ width: 3/4 }}>
      <Box sx={{ m: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Stack spacing={2}>
            <Typography variant='h4'>{user.username}</Typography>
            <Button variant='contained' onClick={() => dispatch({ type: 'LOGOUT' })} sx={{ width: 1/4 }}>Log Out</Button>
          </Stack>
        </Paper>
      </Box>
      {/* <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
    </Container>
  );
}

// this allows us to use <App /> in index.js
export default Profile;

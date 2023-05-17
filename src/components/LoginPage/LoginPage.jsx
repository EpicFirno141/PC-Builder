import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function LoginPage() {
  const history = useHistory();

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
          <TextField
            id="outlined-helperText"
            label="Username"
            defaultValue=""
            sx={{ m: 1, width: '30ch' }}
          />
          <br />
          <TextField
            id="outlined-helperText"
            label="Password"
            defaultValue=""
            sx={{ mt: 1, mr: 1, ml: 1, width: '30ch' }}
          />
        </CardContent>
        <CardActions>
          <Button size="medium" variant="contained" sx={{ mr: 1, mb: 1, ml: 1 }} >Login</Button>
          <Button size="medium" variant="contained" sx={{ mr: 1, mb: 1 }} >Register</Button>
        </CardActions>
      </Card>
    </Grid>
    // <div>
    //   <LoginForm />

    //   <center>
    //     <button
    //       type="button"
    //       className="btn btn_asLink"
    //       onClick={() => {
    //         history.push('/registration');
    //       }}
    //     >
    //       Register
    //     </button>
    //   </center>
    // </div>
  );
}

export default LoginPage;

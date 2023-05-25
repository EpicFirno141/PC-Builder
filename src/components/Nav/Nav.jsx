import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SideDrawer from './SideDrawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function Nav() {
  const history = useHistory();

  const profile = () => {
    history.push('/profile')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SideDrawer />
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            PC Builder
          </Typography>
          <AccountCircle onClick={profile} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;

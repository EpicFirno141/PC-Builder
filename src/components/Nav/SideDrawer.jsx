import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import ComputerIcon from '@mui/icons-material/Computer';
import ForumIcon from '@mui/icons-material/Forum';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SideDrawer() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [drawerState, setDrawerState] = useState(false);
    const user = useSelector(store => store.user);

    const logout = () => {
        history.push('/login');
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <Box sx={{ mr: 2 }}>
            <MenuIcon onClick={() => setDrawerState(!drawerState)}/>
            <Drawer
                open={drawerState}
                onClose={() => setDrawerState(!drawerState)}
            >   
                <Box sx={{ width: 250 }}>
                    <Toolbar />
                    <Divider />
                    {
                        user.id ? (
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => history.push('/list')}>
                                    <ListItemIcon>
                                        <ComputerIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My PC's" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                    <ListItemIcon>
                                        <SearchIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Parts Search" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => history.push('/community')}>
                                    <ListItemIcon>
                                        <ForumIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Community" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={logout}>
                                    <ListItemIcon>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Log Out" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        ) : (
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => history.push('/login')}>
                                    <ListItemIcon>
                                        <LoginIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Log In" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        )
                    }
                </Box>
            </Drawer>
        </Box>
    );
}

export default SideDrawer;
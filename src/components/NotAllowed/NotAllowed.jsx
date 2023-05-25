import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

function NotAllowed() {
    const dispatch = useDispatch();
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    }

    const logOut = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/login');
    }

    return(
        <div>
            <Alert severity="error">This page does not match anything associated with user, please go back</Alert>
            <Box sx={{ m: 'auto', mt: 3, width: '25%', alignItems: 'center' }}>
                <Stack spacing={2}>
                    <Button variant='contained' onClick={goBack} sx={{ py: 1.5, textAlign: 'center' }}>Back to List</Button>
                    <Button variant='outlined' onClick={logOut} sx={{ py: 1.5, textAlign: 'center' }}>Log Out</Button>
                </Stack>
            </Box>  
        </div>
    );
}

export default NotAllowed;
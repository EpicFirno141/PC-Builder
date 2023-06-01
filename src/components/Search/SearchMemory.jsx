import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemoryData from './MemoryData';

function SearchMemory() {
    const dispatch = useDispatch();
    const memoryList = useSelector(store => store.memoryList);

    useEffect(() => {
        dispatch({ type: 'FETCH_MEMORY_LIST'} );
    }, []);
    return(
        <Box sx={{ width: 3/4, m: 'auto', mt: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Grid container spacing={2}>
                {
                    memoryList.map((memory, i) => (
                        <Grid item key={i}>
                            <MemoryData 
                                memory = {memory}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default SearchMemory;
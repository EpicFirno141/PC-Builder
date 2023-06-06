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
import PsuData from './PsuData';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function SearchPSU() {
    const dispatch = useDispatch();
    const history = useHistory();
    const psuList = useSelector(store => store.psuList);
    const pcItem = useSelector(store => store.pcItem);

    const goBack = () => {
        history.push(`/view/${pcItem.id}`);
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_PSU_LIST'} );
    }, []);
    return(
        <Box sx={{ width: 3/4, m: 'auto', mt: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Button variant='contained' sx={{ margin: 0, position: 'absolute', top: 78, right: 32}} onClick={goBack}>Back</Button>
            <Grid container spacing={2}>
                {
                    psuList.map((psu, i) => (
                        <Grid item key={i}>
                            <PsuData 
                                psu = {psu}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default SearchPSU;
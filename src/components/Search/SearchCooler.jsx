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
import CoolerData from './CoolerData';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function SearchCooler() {
    const dispatch = useDispatch();
    const history = useHistory();
    const coolerList = useSelector(store => store.coolerList);
    const pcItem = useSelector(store => store.pcItem);

    const goBack = () => {
        history.push(`/view/${pcItem.id}`);
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_COOLER_LIST'} );
    }, []);
    return(
        <Box sx={{ width: 3/4, m: 'auto', mt: 2, alignItems: 'center', justifyContent: 'center' }}>
            <Button variant='contained' sx={{ margin: 0, position: 'absolute', top: 78, right: 32}} onClick={goBack}>Back</Button>
            <Grid container spacing={2}>
                {
                    coolerList.map((cooler, i) => (
                        <Grid item key={i}>
                            <CoolerData 
                                cooler = {cooler}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default SearchCooler;
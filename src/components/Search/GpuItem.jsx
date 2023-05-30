import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';

function GpuItem({gpu}) {
    const dispatch = useDispatch();
    const pcItem = useSelector(store => store.pcItem);

    const addGPU = (event) => {
        let component = {
            pc: pcItem.id,
            component: gpu.id
        }
        dispatch({ type: 'ADD_COMPONENT', payload: component })
    }

    return(
        <Card sx={{ width: 320 }}>
            <CardContent>
                <Typography variant='h6'>{gpu.name}</Typography>
                <Typography variant='body1'>${gpu.price}</Typography>
                <Typography variant='body2'>{gpu.specs}</Typography>
            </CardContent>
            <CardMedia 
                component="img"
                image={gpu.image}
                sx={{ objectFit: 'contain', height: 80, width: '100%', mb: 1 }}/>
            <CardActions>
                <Button variant='contained' onClick={addGPU}>Add</Button>
            </CardActions>
        </Card>
    );
}

export default GpuItem;
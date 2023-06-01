import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CpuData({cpu}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const pcItem = useSelector(store => store.pcItem);

    const addCPU = (event) => {
        let component = {
            pc: pcItem.id,
            component: cpu.id
        }
        dispatch({ type: 'ADD_COMPONENT', payload: component });
        history.push(`/view/${pcItem.id}`);
    }

    return(
        <Card sx={{ width: 320 }}>
            <CardContent>
                <Typography variant='h6'>{cpu.name}</Typography>
                <Typography variant='body1'>${cpu.price}</Typography>
                <Typography variant='body2'>{cpu.specs}</Typography>
            </CardContent>
            <CardMedia 
                component="img"
                image={cpu.image}
                sx={{ objectFit: 'contain', height: 80, width: '100%', mb: 1 }}/>
            <CardActions>
                <Button variant='contained' onClick={addCPU} sx={{ m: 'auto', alignItems: 'center'}}>Add</Button>
            </CardActions>
        </Card>
    );
}

export default CpuData;
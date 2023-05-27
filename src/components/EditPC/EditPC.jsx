import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function EditPC() {
    const history = useHistory();
    const pcItem = useSelector(store => store.pcItem);

    const details = () => {
        history.push(`/details/${pcItem.id}`);
    }

    const goBack = () => {
        history.push(`/view/${pcItem.id}`);
    }

    return (
        <Grid container spacing={0}>
            <Stack>
                <Card sx={{ m: 2 }}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={pcItem.image} 
                    />
                </Card>
                <Card sx={{ m: 2 }}>
                    <CardContent>
                        <Stack>
                            <Typography sx={{ m: 'auto' }}><b>Name:</b> {pcItem.name}</Typography>
                            <Typography sx={{ m: 'auto' }}><b>Status:</b> {pcItem.status}</Typography>
                            <Typography sx={{ m: 'auto' }}><b>Color:</b> 
                                <CircleIcon color={pcItem.color} sx={{ verticalAlign: 'middle', pb: 0.3 }}/>
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
            <Stack></Stack>
            <Card sx={{ m: 2, p: 1 }}>
                <CardActions>
                    <Stack spacing={2} sx={{ height: 'auto' }}>
                        <Button variant='contained' onClick={details}>Change Details</Button>
                        <Button variant='contained' onClick={goBack}>Back</Button>
                    </Stack>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default EditPC;
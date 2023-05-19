import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

function PCItem({pc}) {
    return(
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Typography variant='h5'>{pc.name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        {
                            pc.status === 'Built' &&
                                <Paper elevation='1' sx={{ backgroundColor: 'green', m: 'auto', p: 1, textAlign: 'right' }}>
                                    <Typography variant='h7'>{pc.status}</Typography>
                                </Paper>
                        }
                        {
                            pc.status === 'Designed' &&
                                <Paper elevation='1' sx={{ backgroundColor: 'yellow', m: 'auto', p: 1, textAlign: 'right' }}>
                                    <Typography variant='h7'>{pc.status}</Typography>
                                </Paper>
                        }
                        {
                            pc.status === 'Incomplete' &&
                                <Paper elevation='1' sx={{ backgroundColor: 'red', m: 'auto', p: 1, textAlign: 'right', minWidth: 80}}>
                                    <Typography variant='h7'>{pc.status}</Typography>
                                </Paper>
                        }
                    </Grid>
                </Grid>
            </CardContent>
            <CardMedia
                component="img"
                height="140"
                image=""
            />
            <CardActions>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Button variant='contained' sx={{ textAlign: 'left' }}>Remove</Button>
                    </Grid>
                    <Grid 
                        display="flex"
                        justifyContent="flex-end"
                        alignItems="flex-end"
                        item xs={6}
                    >
                        <Button variant='contained' sx={{ textAlign: 'right' }}>View</Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default PCItem;
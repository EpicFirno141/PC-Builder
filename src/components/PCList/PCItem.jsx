import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { red, purple, deepPurple, indigo, lightBlue, green, lime, orange } from '@mui/material/colors';
import { CardMedia } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function PCItem({pc}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const viewPC = () => {
        history.push(`/view/${pc.id}`);
    }

    const deletePC = () => {
        dispatch({ type: 'REMOVE_PC', payload: { id: pc.id } });
    }

    return(
        <div>
            {
                pc.color === 'red' && (
                    <Card sx={{ maxWidth: 500, border: 8, borderColor: red[500] }}>
                        <CardContent>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Typography variant='h5'>{pc.name}</Typography>
                                    {
                                        pc.status === 'Built' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'green', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Designed' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'yellow', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Incomplete' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'gray', p: 1, minWidth: 80}}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                </Stack>
                            </Box>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width={1}
                            image={pc.image}
                        />
                        <CardActions>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Button variant='contained' color='remove' onClick={deletePC}>Remove</Button>
                                    <Button variant='contained' color='view' onClick={viewPC}>View</Button>
                                </Stack>
                            </Box>
                        </CardActions>
                    </Card>
                )
            }
            {
                pc.color === 'purple' && (
                    <Card sx={{ maxWidth: 500, border: 8, borderColor: purple[500] }}>
                        <CardContent>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Typography variant='h5'>{pc.name}</Typography>
                                    {
                                        pc.status === 'Built' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'green', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Designed' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'yellow', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Incomplete' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'gray', p: 1, minWidth: 80}}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                </Stack>
                            </Box>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width={1}
                            image={pc.image}
                        />
                        <CardActions>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Button variant='contained' color='remove' onClick={deletePC}>Remove</Button>
                                    <Button variant='contained' color='view' onClick={viewPC}>View</Button>
                                </Stack>
                            </Box>
                        </CardActions>
                    </Card>
                )
            }
            {
                pc.color === 'deepPurple' && (
                    <Card sx={{ maxWidth: 500, border: 8, borderColor: deepPurple[500] }}>
                        <CardContent>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Typography variant='h5'>{pc.name}</Typography>
                                    {
                                        pc.status === 'Built' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'green', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Designed' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'yellow', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Incomplete' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'gray', p: 1, minWidth: 80}}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                </Stack>
                            </Box>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width={1}
                            image={pc.image}
                        />
                        <CardActions>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Button variant='contained' color='remove' onClick={deletePC}>Remove</Button>
                                    <Button variant='contained' color='view' onClick={viewPC}>View</Button>
                                </Stack>
                            </Box>
                        </CardActions>
                    </Card>
                )
            }
            {
                pc.color === 'indigo' && (
                    <Card sx={{ maxWidth: 500, border: 8, borderColor: indigo[500] }}>
                        <CardContent>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Typography variant='h5'>{pc.name}</Typography>
                                    {
                                        pc.status === 'Built' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'green', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Designed' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'yellow', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Incomplete' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'gray', p: 1, minWidth: 80}}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                </Stack>
                            </Box>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width={1}
                            image={pc.image}
                        />
                        <CardActions>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Button variant='contained' color='remove' onClick={deletePC}>Remove</Button>
                                    <Button variant='contained' color='view' onClick={viewPC}>View</Button>
                                </Stack>
                            </Box>
                        </CardActions>
                    </Card>
                )
            }
            {
                pc.color === 'lightBlue' && (
                    <Card sx={{ maxWidth: 500, border: 8, borderColor: lightBlue[500] }}>
                        <CardContent>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Typography variant='h5'>{pc.name}</Typography>
                                    {
                                        pc.status === 'Built' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'green', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Designed' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'yellow', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Incomplete' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'gray', p: 1, minWidth: 80}}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                </Stack>
                            </Box>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width={1}
                            image={pc.image}
                        />
                        <CardActions>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Button variant='contained' color='remove' onClick={deletePC}>Remove</Button>
                                    <Button variant='contained' color='view' onClick={viewPC}>View</Button>
                                </Stack>
                            </Box>
                        </CardActions>
                    </Card>
                )
            }
            {
                pc.color === 'green' && (
                    <Card sx={{ maxWidth: 500, border: 8, borderColor: green[500] }}>
                        <CardContent>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Typography variant='h5'>{pc.name}</Typography>
                                    {
                                        pc.status === 'Built' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'green', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Designed' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'yellow', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Incomplete' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'gray', p: 1, minWidth: 80}}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                </Stack>
                            </Box>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width={1}
                            image={pc.image}
                        />
                        <CardActions>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Button variant='contained' color='remove' onClick={deletePC}>Remove</Button>
                                    <Button variant='contained' color='view' onClick={viewPC}>View</Button>
                                </Stack>
                            </Box>
                        </CardActions>
                    </Card>
                )
            }
            {
                pc.color === 'lime' && (
                    <Card sx={{ maxWidth: 500, border: 8, borderColor: lime[500] }}>
                        <CardContent>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Typography variant='h5'>{pc.name}</Typography>
                                    {
                                        pc.status === 'Built' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'green', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Designed' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'yellow', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Incomplete' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'gray', p: 1, minWidth: 80}}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                </Stack>
                            </Box>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width={1}
                            image={pc.image}
                        />
                        <CardActions>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Button variant='contained' color='remove' onClick={deletePC}>Remove</Button>
                                    <Button variant='contained' color='view' onClick={viewPC}>View</Button>
                                </Stack>
                            </Box>
                        </CardActions>
                    </Card>
                )
            }
            {
                pc.color === 'orange' && (
                    <Card sx={{ maxWidth: 500, border: 8, borderColor: orange[500] }}>
                        <CardContent>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Typography variant='h5'>{pc.name}</Typography>
                                    {
                                        pc.status === 'Built' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'green', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Designed' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'yellow', p: 1 }}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                    {
                                        pc.status === 'Incomplete' &&
                                            <Paper elevation={1} sx={{ backgroundColor: 'gray', p: 1, minWidth: 80}}>
                                                <Typography variant='h7'>{pc.status}</Typography>
                                            </Paper>
                                    }
                                </Stack>
                            </Box>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="140"
                            width={1}
                            image={pc.image}
                        />
                        <CardActions>
                            <Box width={1}>
                                <Stack direction="row"
                                justifyContent="space-between"
                                alignItems="center">
                                    <Button variant='contained' color='remove' onClick={deletePC}>Remove</Button>
                                    <Button variant='contained' color='view' onClick={viewPC}>View</Button>
                                </Stack>
                            </Box>
                        </CardActions>
                    </Card>
                )
            }
        </div>
    );
}

export default PCItem;
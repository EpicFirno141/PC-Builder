import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentItem from './ComponentItem';
import ChildrenCount from './ChildrenCount';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function ComponentList() {
    const history = useHistory();
    const dispatch = useDispatch();

    const componentList = useSelector(store => store.componentList);
    const pcItem = useSelector(store => store.pcItem);

    const removeComponent = (id) => {
        let removal = {
            pc: pcItem.id,
            component: id
        }
        dispatch({ type: 'REMOVE_COMPONENT', payload: removal });
    }

    const searchGPU = () => {
        history.push('/search/gpu');
    }

    return (
        <Stack>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>GPU</Typography>
                    <Box>
                        {
                            componentList.map((component) => (
                                component.type === 'gpu' && 
                                    <Card key={component.id} sx={{ my: 2 }}>
                                        <CardContent>
                                            <Typography variant='h6'>{component.name}</Typography>
                                            <Typography variant='body2'>${component.price}</Typography>
                                            <Typography variant='body2'>{component.specs}</Typography>
                                        </CardContent>
                                        <CardMedia 
                                            component="img"
                                            image={component.image}
                                            sx={{ objectFit: 'contain', height: 100, width: '100%', mb: 1 }}/>
                                        <CardActions>
                                            <Button variant='contained' onClick={() => removeComponent(component.id)}>Remove</Button>
                                        </CardActions>
                                    </Card>
                            ))
                        }
                        <Button variant='contained' onClick={searchGPU}>Add</Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>CPU</Typography>
                    <Box>
                        {
                            componentList.map((component) => (
                                component.type === 'cpu' && 
                                    <Card key={component.id} sx={{ my: 2 }}>
                                        <CardContent>
                                            <Typography variant='h6'>{component.name}</Typography>
                                            <Typography variant='body2'>${component.price}</Typography>
                                            <Typography variant='body2'>{component.specs}</Typography>
                                        </CardContent>
                                        <CardMedia 
                                            component="img"
                                            image={component.image}
                                            sx={{ objectFit: 'contain', height: 100, width: '100%', mb: 1 }}/>
                                    </Card>
                            ))
                        }
                        <Button variant='contained'>Add</Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>Case</Typography>
                    <Box>
                        {
                            componentList.map((component) => (
                                component.type === 'case' && 
                                    <Card key={component.id} sx={{ my: 2 }}>
                                        <CardContent>
                                            <Typography variant='h6'>{component.name}</Typography>
                                            <Typography variant='body2'>${component.price}</Typography>
                                            <Typography variant='body2'>{component.specs}</Typography>
                                        </CardContent>
                                        <CardMedia 
                                            component="img"
                                            image={component.image}
                                            sx={{ objectFit: 'contain', height: 100, width: '100%', mb: 1 }}/>
                                    </Card>
                            ))
                        }
                        <Button variant='contained'>Add</Button>
                    </Box>
                </CardContent>
            </Card>
        </Stack>
    );
}

export default ComponentList;
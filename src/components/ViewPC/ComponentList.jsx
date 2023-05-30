import React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentItem from './ComponentItem';

function ComponentList() {
    const componentList = useSelector(store => store.componentList);

    return (
        <Stack>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>GPU</Typography>
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
                                </Card>
                        ))
                    }
                </CardContent>
            </Card>
        </Stack>
    );
}

export default ComponentList;
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ComponentItem({component}) {
    let category = '';
    if(component.type === 'gpu'){
        category = 'GPU';
    } else if(component.type === 'cpu'){
        category = 'CPU';
    } else if(component.type === 'cpu_cooler'){
        category = 'CPU Cooler';
    } else if(component.type === 'psu'){
        category = 'PSU';
    } else if(component.type === 'motherboard'){
        category = 'Motherboard';
    } else if(component.type === 'memory'){
        category = 'Memory';
    } else if(component.type === 'storage'){
        category = 'Storage';
    } else if(component.type === 'case'){
        category = 'Case';
    }

    return (
        <Card sx={{ m: 2, mb: 0 }}>
            <CardContent>
                <Typography variant='h5'>{category} - {component.name}</Typography>
                <Typography variant='h7'>${component.price}</Typography>
            </CardContent>
            <CardMedia 
                component="img"
                height="100"
                image={component.image}
                sx={{ objectFit: "contain", m: 1 }}
            />
        </Card>
    );
}

export default ComponentItem;
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

function CaseItem({component, removeComponent}) {

    return (
        <Card sx={{ my: 2 }}>
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
                <Button variant='contained' onClick={() => removeComponent(component.id)} sx={{ m: 'auto', alignItems: 'center' }}>Remove</Button>
            </CardActions>
        </Card>
    );
}

export default CaseItem;
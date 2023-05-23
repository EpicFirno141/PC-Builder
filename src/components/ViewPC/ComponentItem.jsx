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

function ComponentItem(component) {
    return (
        <Card>
            <CardContent>
                <Typography>{component.price}</Typography>
            </CardContent>
        </Card>
    );
}

export default ComponentItem;
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
import ComponentItem from './ComponentItem';

function ComponentList() {
    const componentList = useSelector(store => store.componentList);

    return (
        <Grid container spacing={2}>
            {
            componentList.map((component) => (
                <Grid item xs={12} key={component.id}>
                    <ComponentItem 
                        component = {component}
                    />
                </Grid>
            ))
            }
        </Grid>
    );
}

export default ComponentList;
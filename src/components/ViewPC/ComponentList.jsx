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
import GpuItem from './GpuItem';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CpuItem from './CpuItem';
import CaseItem from './CaseItem';
import CoolerItem from './CoolerItem';
import MemoryItem from './MemoryItem';
import StorageItem from './StorageItem';
import MoboItem from './MoboItem';
import PsuItem from './PsuItem';

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
        console.log(JSON.stringify(removal));
        dispatch({ type: 'REMOVE_COMPONENT', payload: removal });
    }

    const searchGPU = () => {
        history.push('/search/gpu');
    }

    const searchCPU = () => {
        history.push('/search/cpu');
    }

    const searchCooler = () => {
        history.push('/search/cooler');
    }

    const searchMobo = () => {
        history.push('/search/mobo');
    }

    const searchMemory = () => {
        history.push('/search/memory');
    }

    const searchStorage = () => {
        history.push('/search/storage');
    }

    const searchPSU = () => {
        history.push('/search/psu');
    }

    const searchCase = () => {
        history.push('/search/case');
    }

    return (
        <Stack>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>GPU</Typography>
                    <Box>
                        {
                            componentList.map((component, i) => (
                                component.type === 'gpu' && 
                                    <GpuItem 
                                    key = {i}
                                    component = {component}
                                    removeComponent = {removeComponent}
                                    />
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
                            componentList.map((component, i) => (
                                component.type === 'cpu' && 
                                    <CpuItem 
                                    key = {i}
                                    component = {component}
                                    removeComponent = {removeComponent}
                                    />
                            ))
                        }
                        <Button variant='contained' onClick={searchCPU}>Add</Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>Cooler</Typography>
                    <Box>
                        {
                            componentList.map((component, i) => (
                                component.type === 'cpu_cooler' && 
                                    <CoolerItem 
                                    key = {i}
                                    component = {component}
                                    removeComponent = {removeComponent}
                                    />
                            ))
                        }
                        <Button variant='contained' onClick={searchCooler}>Add</Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>Motherboard</Typography>
                    <Box>
                        {
                            componentList.map((component, i) => (
                                component.type === 'motherboard' && 
                                    <MoboItem 
                                    key = {i}
                                    component = {component}
                                    removeComponent = {removeComponent}
                                    />
                            ))
                        }
                        <Button variant='contained' onClick={searchMobo}>Add</Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>Memory</Typography>
                    <Box>
                        {
                            componentList.map((component, i) => (
                                component.type === 'memory' && 
                                    <MemoryItem 
                                    key = {i}
                                    component = {component}
                                    removeComponent = {removeComponent}
                                    />
                            ))
                        }
                        <Button variant='contained' onClick={searchMemory}>Add</Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>Storage</Typography>
                    <Box>
                        {
                            componentList.map((component, i) => (
                                component.type === 'storage' && 
                                    <StorageItem 
                                    key = {i}
                                    component = {component}
                                    removeComponent = {removeComponent}
                                    />
                            ))
                        }
                        <Button variant='contained' onClick={searchStorage}>Add</Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>PSU</Typography>
                    <Box>
                        {
                            componentList.map((component, i) => (
                                component.type === 'psu' && 
                                    <PsuItem 
                                    key = {i}
                                    component = {component}
                                    removeComponent = {removeComponent}
                                    />
                            ))
                        }
                        <Button variant='contained' onClick={searchPSU}>Add</Button>
                    </Box>
                </CardContent>
            </Card>
            <Card sx={{ mt: 2 }}>
                <CardContent>
                    <Typography variant='h4'>Case</Typography>
                    <Box>
                        {
                            componentList.map((component, i) => (
                                component.type === 'case' && 
                                    <CaseItem 
                                    key = {i}
                                    component = {component}
                                    removeComponent = {removeComponent}
                                    />
                            ))
                        }
                        <Button variant='contained' onClick={searchCase}>Add</Button>
                    </Box>
                </CardContent>
            </Card>
        </Stack>
    );
}

export default ComponentList;
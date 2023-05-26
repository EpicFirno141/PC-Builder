import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function ChangeDetails() {
    const history = useHistory();
    const dispatch = useDispatch();

    const pcItem = useSelector(store => store.pcItem);
    const [statusValue, setStatusValue] = useState('');
    const [colorValue, setColorValue] = useState('');
    const [name, setName] = useState('');

    const goBack = () => {
        history.push(`/edit/${pcItem.id}`);
    }

    const saveDetails = () => {
        let statusID;
        if(statusValue === 'Incomplete'){
            statusID = 2;
        } else if(statusValue === 'Designed'){
            statusID = 3;
        } else if(statusValue === 'Built'){
            statusID = 1;
        }
        dispatch({ type: 'UPDATE_PC_DETAILS', payload: {
            id: pcItem.id, name: name, status: statusID, color: colorValue
        } });
    }

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleColor = (event) => {
        setColorValue(event.target.value);
    };

    const handleStatus = (event) => {
        setStatusValue(event.target.value);
    }

    useEffect(() => {
        setStatusValue(pcItem.status);
        setColorValue(pcItem.color);
    }, []);

    return(
        <Box sx={{ m: 'auto', mt: 4, maxWidth: 800, textAlign: 'center', alignItems: 'center' }}>
            <Card>
                <CardContent>
                    <Stack spacing={3} sx={{ alignItems: 'center', p: 1 }}>
                        <TextField onChange={handleName} defaultValue={pcItem.name} label='Name' variant="outlined" />
                        <FormControl>
                            <FormLabel>Status</FormLabel>
                            <RadioGroup row value={statusValue} onChange={handleStatus}>
                                <FormControlLabel value="Incomplete" control={<Radio />} label="Incomplete" />
                                <FormControlLabel value="Designed" control={<Radio />} label="Designed" />
                                <FormControlLabel value="Built" control={<Radio />} label="Built" />
                            </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Color</FormLabel>
                            <RadioGroup row value={colorValue} onChange={handleColor} sx={{ml: 4}}>
                                <FormControlLabel value="purple" control={
                                    <Radio 
                                        icon={<CircleOutlinedIcon color="purple" />} 
                                        checkedIcon={<CircleIcon color="purple" />}
                                    />} 
                                />
                                <FormControlLabel value="deepPurple" control={
                                    <Radio 
                                        icon={<CircleOutlinedIcon color="deepPurple" />} 
                                        checkedIcon={<CircleIcon color="deepPurple" />}
                                    />} 
                                />
                                <FormControlLabel value="indigo" control={
                                    <Radio 
                                        icon={<CircleOutlinedIcon color="indigo" />} 
                                        checkedIcon={<CircleIcon color="indigo" />}
                                    />} 
                                />
                                <FormControlLabel value="lightBlue" control={
                                    <Radio 
                                        icon={<CircleOutlinedIcon color="lightBlue" />} 
                                        checkedIcon={<CircleIcon color="lightBlue" />}
                                    />} 
                                />
                                <FormControlLabel value="green" control={
                                    <Radio 
                                        icon={<CircleOutlinedIcon color="green" />} 
                                        checkedIcon={<CircleIcon color="green" />}
                                    />} 
                                />
                                <FormControlLabel value="lime" control={
                                    <Radio 
                                        icon={<CircleOutlinedIcon color="lime" />} 
                                        checkedIcon={<CircleIcon color="lime" />}
                                    />} 
                                />
                                <FormControlLabel value="orange" control={
                                    <Radio 
                                        icon={<CircleOutlinedIcon color="orange" />} 
                                        checkedIcon={<CircleIcon color="orange" />}
                                    />} 
                                />
                                <FormControlLabel value="red" control={
                                    <Radio 
                                        icon={<CircleOutlinedIcon color="red" />} 
                                        checkedIcon={<CircleIcon color="red" />}
                                    />} 
                                />
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                    <Button variant='contained' sx={{ mx: 1 }} onClick={saveDetails}>Save</Button>
                    <Button variant='contained' sx={{ mx: 1 }} onClick={goBack}>Back</Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ChangeDetails;
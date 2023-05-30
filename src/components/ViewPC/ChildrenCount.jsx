import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';

import { Children } from "react";

function ChildrenCount({ children }) {
  const countArray = Children.toArray(children).length;
  return (
    <Box>
        {
            countArray < 1 &&
                <Button>Add</Button>
        }
    </Box>
  );
}

export default ChildrenCount;
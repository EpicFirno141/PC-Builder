import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function PCList() {
  const history = useHistory();

  const addPC = () => {

  }

  return (
    <div className="container">
      <Button variant="contained"
        endIcon={<AddIcon />} 
        color="secondary" 
        onClick={addPC}
        sx={{ margin: 0,
          top: 'auto',
          right: 20,
          bottom: 'auto',
          left: 'auto',
          position: 'fixed',
          padding: 1.3,
        }}
      >Add PC</Button>
    </div>
  );
}

export default PCList;

import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import useStyles from './styles';

function Approver(){
    var classes = useStyles();

    return ( 
          <div className={classes.leftItem}>
                <Typography>Bussiness Development</Typography>
                <Typography>Angga Something</Typography>
            </div>
     );
}

export default Approver
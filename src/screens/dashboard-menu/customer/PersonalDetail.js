import { Typography, Box } from '@mui/material';
import useStyles from './styles';
import React, { useState, useEffect } from 'react';
import PersonalForm from './personal-details/PersonalForm';

function PersonalDetails() {
    var classes = useStyles();

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Hi Tony
            </Typography>
            <Box className={classes.boxContainer}>
                <PersonalForm />
            </Box>
        </>
    );
}

export default PersonalDetails;
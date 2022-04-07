import React, { useState, useEffect } from 'react';
import { Typography, TextField } from '@mui/material';
import GridWrapper from '../../../../components/grid/GridWrapper';
import useTranslation from "../../../../utils/i18n/translations";
import GridItem from '../../../../components/grid/GridItem';
import useStyles from './styles';

function PersonalForm() {
    var classes = useStyles();
    const i18n = useTranslation();

    const generateContent = () => {
        return (
            <GridWrapper spacing={0.5}>
                 <GridItem xs="auto">
                    <Typography variant="body1" gutterBottom>
                        {i18n["customer.name"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <TextField
                        className={classes.textfield_flex}
                        id="outlined-error"
                        placeholder='Customer Name'
                    />
                </GridItem>
                <GridItem xs="auto">
                    <Typography variant="body1" gutterBottom>
                        {i18n["customer.name"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <TextField
                        className={classes.textfield_flex}
                        id="outlined-error"
                        placeholder='Customer Name'
                    />
                </GridItem>
                <GridItem xs="auto">
                    <Typography variant="body1" gutterBottom>
                        {i18n["customer.name"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <TextField
                        className={classes.textfield_flex}
                        id="outlined-error"
                        placeholder='Customer Name'
                    />
                </GridItem>
                <GridItem xs="auto">
                    <Typography variant="body1" gutterBottom>
                        {i18n["customer.name"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <TextField
                        className={classes.textfield_flex}
                        id="outlined-error"
                        placeholder='Customer Name'
                    />
                </GridItem>
            </GridWrapper>
        )
    }

    return (
        <>
            {
                generateContent()
            }
        </>
    );
}

export default PersonalForm;

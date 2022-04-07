import React, { useState, useEffect } from 'react';
import useTranslation from "../../../../utils/i18n/translations";
import {
    Typography, TextField, Divider,
    FormControlLabel, Radio, FormGroup, Button,
    Tooltip
} from '@mui/material';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';
import useStyles from './styles';
import GridWrapper from '../../../../components/grid/GridWrapper';
import GridItem from '../../../../components/grid/GridItem';
import { withStyles } from '@mui/styles';
import '../../../../themes/customer/customer_registration.scss'

const StyledTextField = withStyles({
    root: {
        "& fieldset": {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        }
    }
})(TextField);

const StyledButton = withStyles({
    root: {
        width: 20,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        textTransform: "lowercase"
    }
})(Button);

function RegisterNew() {
    var classes = useStyles();
    const selectType = useRadioGroup();
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
                        {i18n["customer.email"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <TextField
                        className={classes.textfield_flex}
                        id="outlined-error"
                        placeholder='Customer Email'
                    />
                </GridItem>
                <GridItem xs="auto">
                    <Typography variant="body1" gutterBottom>
                        {i18n["customer.mobile.phone"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <TextField
                        className={classes.textfield_flex}
                        placeholder='Mobile Phone'
                        id="outlined-error"
                    />
                </GridItem>
                <GridItem xs="auto">
                    <Typography variant="body1" gutterBottom>
                        {i18n["customer.initial.password"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <FormGroup row>
                        <StyledTextField variant="outlined" placeholder="Initial Password" />
                        <StyledButton variant="contained" disableElevation>
                            <Tooltip title={i18n["reset"]} placement="bottom">
                                <DateRangeIcon />
                            </Tooltip>
                        </StyledButton>
                    </FormGroup>
                </GridItem>
                <GridItem xs="auto">
                    <Typography variant="body1" gutterBottom>
                        {i18n["customer.segment.type"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <RadioGroup
                        row
                    // value={value}
                    // onChange={handleChange}
                    >
                        <FormControlLabel value="SCF" control={<Radio />} label="SCF" />
                        <FormControlLabel value="IF" control={<Radio />} label="IF" />
                    </RadioGroup>
                </GridItem>
                <GridItem xs="auto">
                    <Typography variant="body1" gutterBottom>
                        {i18n["customer.type"]}
                    </Typography>
                </GridItem>
                <GridItem xs="auto">
                    <RadioGroup
                        row
                    // value={value}
                    // onChange={handleChange}
                    >
                        <FormControlLabel value="individu" control={<Radio />} label="Individu" />
                        <FormControlLabel value="company" control={<Radio />} label="Company" />
                    </RadioGroup>
                </GridItem>
                <GridItem xs="auto">
                </GridItem>
                <GridItem xs="auto">
                    <FormGroup row>
                        <StyledTextField variant="outlined" placeholder="Initial Password" />
                        <StyledButton variant="contained" disableElevation className={classes.noRightRadius}>
                            <Tooltip title="Add" placement="bottom">
                                <DateRangeIcon />
                            </Tooltip>
                        </StyledButton>
                        <StyledButton variant="contained" disableElevation className={classes.noRightRadius}>
                            <Tooltip title="Add" placement="bottom">
                                <DateRangeIcon />
                            </Tooltip>
                        </StyledButton>
                        <StyledButton variant="contained" disableElevation className={classes.noRightRadius}>
                            <Tooltip title="Add" placement="bottom">
                                <DateRangeIcon />
                            </Tooltip>
                        </StyledButton>
                    </FormGroup>
                </GridItem>
            </GridWrapper>
        )
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {i18n["register.new.customer"]}
            </Typography>
            <Divider />
            {generateContent()}
            {/* {generateOption()} */}
        </div>
    );
}

export default RegisterNew;

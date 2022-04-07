import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
    Grid, Button, TextField,
    Typography, InputAdornment, Divider,
    Select, OutlinedInput, MenuItem
} from '@mui/material';
import { style } from '@mui/system';
import DateRangePicker from '../DateRangePicker';

const GridView = styled('div')(({ theme }) => ({
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    width: '100%'
}));

const ButtonSection = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.custom.darkBrown,
    color: theme.palette.common.white,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 15,
    marginTop: 10,
    width: '100%'
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 1000,
        },
    },
};

//xs = 12 max vp; 
const FormGenerator = (props) => {
    const { data, size } = props;

    const [values, setValues] = useState(data);

    const handleChange = (field, index) => (e) => {
        var vals = JSON.parse(JSON.stringify(values))
        console.log("ass?" + JSON.stringify(vals));
        vals.fields_row[field][index].value = e.target.value;
        console.log("sekarang" + JSON.stringify(vals));
        setValues(vals);
    }

    const handleSubmit = () => {
        alert("tes " + JSON.stringify(values))
    }

    const gridItem = () => {
        var value = [];
        var model = [];

        for (var x in values.fields_row) {
            console.log("isi x" + values.fields_row[x].length);
            for (var i = 0; i < values.fields_row[x].length; i++) {
                if (values.fields_row[x][i].component == "typography") {
                    model.push(<Typography key={values.fields_row[x][i].id} variant="body2">{values.fields_row[x][i].label}</Typography>);
                }
                else if (values.fields_row[x][i].component == "textfield") {
                    model.push(
                        <TextField
                            label={values.fields_row[x][i].label}
                            id={values.fields_row[x][i].id}
                            sx={{ m: 1, color: 'green' }}
                            onChange={handleChange(x, i)}
                            // InputProps={{
                            //     startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            // }}
                        />
                    );
                } else if (values.fields_row[x][i].component == "datepicker") {
                    model.push(<DateRangePicker />)
                } else if (values.fields_row[x][i].component == "select") {
                    var menuItems = [];
                    for (var opt in values.fields_row[x][i].options) {
                        console.log("apa sih " + opt)
                        menuItems.push(<MenuItem
                            key={opt}
                            value={values.fields_row[x][i].options[opt]}
                        // style={getStyles(name, personName, theme)}
                        >
                            {values.fields_row[x][i].options[opt]}
                        </MenuItem>)
                    }
                    model.push(<Select sx={{ width: '-webkit-fill-available' }}
                        labelId={values.fields_row[x][i].id}
                        id={values.fields_row[x][i].id}
                        value={values.fields_row[x][i].options.opt1}
                        // onChange={handleChange}
                        input={<OutlinedInput label="opt1" />}
                        MenuProps={MenuProps}
                    >
                        {menuItems}
                    </Select>);
                }
            }
            value.push(<Grid item xs={size}>{model}</Grid>);
            model = [];
        }

        return <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>{value}</Grid>;
    }

    return (
        <div>
            <GridView>
                <Typography variant="h4">{values.title}</Typography>
                {
                    gridItem()
                }
                <Divider />
            </GridView>
            <ButtonSection>
                <Button onClick={handleSubmit}>Submit</Button>
            </ButtonSection>
        </div>
    )
};

export default FormGenerator;
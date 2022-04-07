import React from 'react';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

const FormStyle = styled(Box)(({ theme })=>({
  width: '100%',
  marginBottom: 8,
  borderRadius: 8,
  borderColor: theme.palette.custom.darkBrown,
  borderStyle: 'solid',
  // backgroundColor: 'grey',
    '& .MuiTextField-root': { m: 1, width: '90%' },
}));

const FormBody = forwardRef(({ children, title = '', ...other }, ref) => {
    return(
      <FormStyle component="form" noValidate autoComplete="off"> 
        <div>
          {children}
        </div>
      </FormStyle>
    )
});

FormBody.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default FormBody;
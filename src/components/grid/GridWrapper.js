import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid";

function GridWrapper({ children, spacing }) {
    return (
        <Grid container spacing={spacing} alignItems="center">
            {children}
        </Grid>
    );
}

GridWrapper.propTypes = {
    children: PropTypes.element.isRequired
}

GridWrapper.defaultProps = {
    spacing: 2
}

export default GridWrapper;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from "@mui/material/Grid";

function GridItem({ children, xs='12', md='6', lg='6', sm='6', alignItems }) {
    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg} alignItems={alignItems}>
            {children}
        </Grid>
    );
}

GridItem.propTypes = {
    children: PropTypes.element.isRequired
}

export default GridItem;